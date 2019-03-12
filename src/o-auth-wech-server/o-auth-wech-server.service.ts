import { Injectable } from '@nestjs/common';
import { config } from '../../config/Config';
import { hex_sha1 } from '../../utils/sha1';

@Injectable()
export class OAuthWechServerService {
    confirmWeChat(query: any) {
        const { signature, echostr, timestamp, nonce } = query;
        // console.log("request data : \n ", query);
        const combinedData = [timestamp, nonce, config.TOKEN].sort();
        const str = combinedData.join('');
        const encrypt = hex_sha1(str);

        if (encrypt === signature) {
            return echostr
        } else {
            return "nowechat"
        }
    }
}
