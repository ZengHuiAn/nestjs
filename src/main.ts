import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import {config} from 'dotenv';
const port = process.env.PORT || 8080;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`listen port ${port} hostname:`);
}
bootstrap();
