import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { logger } from './middlewares';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: 'http://localhost:3000' },
  });
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  app.use(helmet());
  app.use(logger);
  await app.listen(port);
}
bootstrap();
