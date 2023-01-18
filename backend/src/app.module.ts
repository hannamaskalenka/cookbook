import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { UsersModule } from './modules/users/users.module';
import { SMTPService } from './services/smtp/smtp.service';

import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'dev.env',
      isGlobal: true,
      expandVariables: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        PORT: Joi.number().default(5000),
      }),
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_API_KEY,
        },
      },
      template: {
        dir: path.join(__dirname, 'services', 'smtp', 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    RecipesModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, SMTPService],
})
export class AppModule {}
