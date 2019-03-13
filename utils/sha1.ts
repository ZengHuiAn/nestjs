const hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
const b64pad = ''; /* base-64 pad character. "=" for strict RFC compliance   */
const chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
export function hex_sha1(s: string): string {
    return binb2hex(core_sha1(str2binb(s), s.length * chrsz));
}
function b64_sha1(s: string): string {
    return binb2b64(core_sha1(str2binb(s), s.length * chrsz));
}
function str_sha1(s: string): string {
    return binb2str(core_sha1(str2binb(s), s.length * chrsz));
}
function hex_hmac_sha1(key: string, data: string): string {
    return binb2hex(core_hmac_sha1(key, data));
}
function b64_hmac_sha1(key: string, data: string): string {
    return binb2b64(core_hmac_sha1(key, data));
}
function str_hmac_sha1(key: string, data: string): string {
    return binb2str(core_hmac_sha1(key, data));
}

/*
 * Perform a simple self-test to see if the VM is working
 */
function sha1_vm_test(): boolean {
    return hex_sha1('abc') === 'a9993e364706816aba3e25717850c26c9cd0d89d';
}

/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */
function core_sha1(x: number[], len: number): number[] {
    /* append padding */
    // tslint:disable-next-line:no-bitwise
    x[len >> 5] |= 0x80 << (24 - (len % 32));
    // tslint:disable-next-line:no-bitwise
    x[(((len + 64) >> 9) << 4) + 15] = len;

    const w = Array(80);
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    let e = -1009589776;

    for (let i = 0; i < x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        const olde = e;

        for (let j = 0; j < 80; j++) {
            // tslint:disable-next-line:no-bitwise
            if (j < 16) {
                w[j] = x[i + j];
            } else {
                // tslint:disable-next-line: no-bitwise
                w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            }
            const t = safe_add(
                safe_add(rol(a, 5), sha1_ft(j, b, c, d)),
                safe_add(safe_add(e, w[j]), sha1_kt(j)),
            );
            e = d;
            d = c;
            c = rol(b, 30);
            b = a;
            a = t;
        }

        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
        e = safe_add(e, olde);
    }
    return Array(a, b, c, d, e);
}

/*
 * Perform the appropriate triplet combination function for the current
 * iteration
 */
function sha1_ft(t: number, b: number, c: number, d: number): number {
    if (t < 20) {
        // tslint:disable-next-line: no-bitwise
        return (b & c) | (~b & d);
    }
    if (t < 40) {
        // tslint:disable-next-line: no-bitwise
        return b ^ c ^ d;
    }
    if (t < 60) {
        // tslint:disable-next-line: no-bitwise
        return (b & c) | (b & d) | (c & d);
    }
    // tslint:disable-next-line: no-bitwise
    return b ^ c ^ d;
}

/*
 * Determine the appropriate additive constant for the current iteration
 */
function sha1_kt(t: number): number {
    return t < 20
        ? 1518500249
        : t < 40
        ? 1859775393
        : t < 60
        ? -1894007588
        : -899497514;
}

/*
 * Calculate the HMAC-SHA1 of a key and some data
 */
function core_hmac_sha1(key: string, data: string): number[] {
    let bkey = str2binb(key);
    if (bkey.length > 16) {
        bkey = core_sha1(bkey, key.length * chrsz);
    }

    // tslint:disable-next-line: one-variable-per-declaration
    const ipad = Array(16),
        opad = Array(16);
    for (let i = 0; i < 16; i++) {
        // tslint:disable-next-line: no-bitwise
        ipad[i] = bkey[i] ^ 0x36363636;
        // tslint:disable-next-line: no-bitwise
        opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }

    const hash = core_sha1(
        ipad.concat(str2binb(data)),
        512 + data.length * chrsz,
    );
    return core_sha1(opad.concat(hash), 512 + 160);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x: number, y: number): number {
    // tslint:disable-next-line: no-bitwise
    const lsw = (x & 0xffff) + (y & 0xffff);
    // tslint:disable-next-line: no-bitwise
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    // tslint:disable-next-line: no-bitwise
    return (msw << 16) | (lsw & 0xffff);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function rol(num: number, cnt: number): number {
    // tslint:disable-next-line: no-bitwise
    return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert an 8-bit or 16-bit string to an array of big-endian words
 * In 8-bit function, characters >255 have their hi-byte silently ignored.
 */
function str2binb(str: string): number[] {
    const bin = Array();
    // tslint:disable-next-line: no-bitwise
    const mask = (1 << chrsz) - 1;
    for (let i = 0; i < str.length * chrsz; i += chrsz) {
        // tslint:disable-next-line: no-bitwise
        bin[i >> 5] |=
            // tslint:disable-next-line: no-bitwise
            (str.charCodeAt(i / chrsz) & mask) << (32 - chrsz - (i % 32));
    }
    return bin;
}

/*
 * Convert an array of big-endian words to a string
 */
function binb2str(bin: number[]): string {
    let str = '';
    // tslint:disable-next-line: no-bitwise
    const mask = (1 << chrsz) - 1;
    for (let i = 0; i < bin.length * 32; i += chrsz) {
        str += String.fromCharCode(
            // tslint:disable-next-line: no-bitwise
            (bin[i >> 5] >>> (32 - chrsz - (i % 32))) & mask,
        );
    }
    return str;
}

/*
 * Convert an array of big-endian words to a hex string.
 */
function binb2hex(binarray: number[]): string {
    const hexTab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
    let str = '';
    for (let i = 0; i < binarray.length * 4; i++) {
        str +=
            // tslint:disable-next-line: no-bitwise
            hexTab.charAt((binarray[i >> 2] >> ((3 - (i % 4)) * 8 + 4)) & 0xf) +
            // tslint:disable-next-line: no-bitwise
            hexTab.charAt((binarray[i >> 2] >> ((3 - (i % 4)) * 8)) & 0xf);
    }
    return str;
}

/*
 * Convert an array of big-endian words to a base-64 string
 */
function binb2b64(binarray: number[]): string {
    const tab =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let str = '';
    for (let i = 0; i < binarray.length * 4; i += 3) {
        const triplet =
            // tslint:disable-next-line: no-bitwise
            (((binarray[i >> 2] >> (8 * (3 - (i % 4)))) & 0xff) << 16) |
            // tslint:disable-next-line: no-bitwise
            (((binarray[(i + 1) >> 2] >> (8 * (3 - ((i + 1) % 4)))) & 0xff) <<
                8) |
            // tslint:disable-next-line: no-bitwise
            ((binarray[(i + 2) >> 2] >> (8 * (3 - ((i + 2) % 4)))) & 0xff);
        for (let j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > binarray.length * 32) {
                str += b64pad;
            } else {
                // tslint:disable-next-line: no-bitwise
                str += tab.charAt((triplet >> (6 * (3 - j))) & 0x3f);
            }
        }
    }
    return str;
}
