import Axios from 'axios';
import { config } from '../config/Config';
import { prisma } from '../generated/prisma-client';

const axios = Axios.create({
    baseURL: 'https://api.weixin.qq.com/',
    timeout: 3000,
});

export async function getWeChatAccessToken() {
    // cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET

    const tokenCode = await axios.get(
        `cgi-bin/token?grant_type=client_credential&appid=${
            config.APPID
        }&secret=${config.APPSECRET}`,
    );

    const code = tokenCode.data.access_token;
    if (code) {
        // appId: String;
        // token?: String;
        // jsApiTicket?: String;
        // deletedAt?: String;
        await prisma.createWechatOfficalAccount({
            appId: `${config.APPID}`,
            token: code,
            jsApiTicket: '',
        });
    }
    console.log(tokenCode.data);

    return;
}
