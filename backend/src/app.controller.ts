import {
  Request,
  Controller,
  Get,
  Post,
  UseGuards,
  Body,
  BadRequestException,
  Query,
} from '@nestjs/common';

import { AppService } from './app.service';
import { LocalGuard } from './guards/local.guard';
import { AuthService } from './modules/auth/auth.service';
import CreateUserDto from './modules/auth/dto/createUser.dto';
import { User } from './modules/users/schemas/user.schema';
import { UsersService } from './modules/users/users.service';
import { SMTPService } from './services/smtp/smtp.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private readonly appService: AppService,
    private smtpService: SMTPService,
  ) {}

  @Get('auth/reset-password')
  async resetPassword(@Query() query: { toEmail: string }) {
    const user = await this.userService.getUserByEmail(query.toEmail);

    if (!user) {
      throw new BadRequestException('The user does not exists');
    }

    return this.smtpService.sendForgotPasswordEmail(user);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
