import { Controller, Get, Query } from '@nestjs/common';
import { OAuthWechServerService } from './o-auth-wech-server.service';

@Controller('o-auth-wech-server')
export class OAuthWechServerController {

    constructor( private readonly oAuthService: OAuthWechServerService) {}

    @Get()
    confirmWeChat(@Query() query) {
        return this.oAuthService.confirmWeChat(query);
    }
}
