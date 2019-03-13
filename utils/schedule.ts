import { getWeChatAccessToken } from '../utils/wechatAPI';

function defMainScgedule(callback: () => void, timer: number) {
    callback();
    setTimeout(() => {
        defMainScgedule(callback, timer);
    }, timer);
}

defMainScgedule(getWeChatAccessToken, 1000 * 60 * 60);
