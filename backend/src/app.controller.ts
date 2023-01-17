import {
  Request,
  Controller,
  Get,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';

import { AppService } from './app.service';
import { LocalGuard } from './guards/local.guard';
import { AuthService } from './modules/auth/auth.service';
import CreateUserDto from './modules/users/dto/createUser.dto';
import { User } from './modules/users/schemas/user.schema';
import { UsersService } from './modules/users/users.service';
import { SMTPService } from './services/smtp.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private readonly appService: AppService,
    private smtpService: SMTPService,
  ) {}

  @UseGuards(LocalGuard)
  @Post('auth/login')
  login(@Request() req) {
    return this.authService.login(req.user as User);
  }

  @Post('auth/signup')
  signup(@Body() body: CreateUserDto) {
    try {
      return this.userService.createUser(body);
    } catch (e) {
      return e;
    }
  }

  @Get('auth/reset-password')
  resetPassword(@Body() body: { toEmail: string }) {
    return this.smtpService.sendForgotPasswordEmail(body.toEmail);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
