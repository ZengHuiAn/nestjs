import {load as  loaderEnv , DotenvConfigOutput} from 'dotenv';
import { Logger } from '@nestjs/common';
export const config = {
    PORT : String,
    TOKEN : String,
    APPID : String,
    APPSECRET : String,
};

function LoaderEnv() {
    const output = loaderEnv({
        path : '.env',
    });
    if (!output.error) {
        Object.keys(config).forEach(element => {
            const result = output.parsed[element];
            if (result) {
                config[element] = result ;
            }
            Logger.log(`get config key ${element} , value : ${result}`);
        });
    }
    Logger.log(output.error);
}

LoaderEnv();
