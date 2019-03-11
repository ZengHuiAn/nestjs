import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import Axios from 'axios';
async function bootstrap() {

  const server = Axios({});
  const app = await NestFactory.create(AppModule, server);
  await app.listen(3000);
}
bootstrap();
