import { getWeChatAccessToken } from "../utils/wechatAPI";
import Schedule from "../utils/schedule";
import { prisma, WechatOfficalAccount } from "../generated/prisma-client";
import { config } from "../config/Config";

// getWeChatAccessToken
// import {} 

export async function getToken() {

    const callBack = async ()=> {
        const tokenCode = await getWeChatAccessToken()
        const token = tokenCode["access_token"];
        if (token) {
            const alldata  = await prisma.createWechatOfficalAccount({ appId : `${config.APPID}`,token:token,});
            console.log("token",alldata);
        }
    }

    const Token = new Schedule({callFunc:getWeChatAccessToken,timer:300})
}



// Schedule
// getWeChatAccessToken