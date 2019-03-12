import  Axios from 'axios'
import { config } from "../config/Config";

const axios = Axios.create({
    baseURL: 'https://api.weixin.qq.com/',
    timeout: 3000,
})

export async function getWeChatAccessToken() {
    // cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
    return await axios.get(`cgi-bin/token?grant_type=client_credential&appid=${config.APPID}&secret=${config.APPSECRET}`)
}
