import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OAuthWechServerController } from './o-auth-wech-server/o-auth-wech-server.controller';
import { OAuthWechServerService } from './o-auth-wech-server/o-auth-wech-server.service';
@Module({
  imports: [],
  controllers: [AppController, OAuthWechServerController],
  providers: [AppService, OAuthWechServerService],
})
export class AppModule {}
