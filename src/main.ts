import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { config } from '../config/Config';
import { getToken } from './startHandler';
Logger.log(config);
getToken()

const port = Number(config.PORT) || 8080;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`listen port ${port} hostname:`);
}
bootstrap();
