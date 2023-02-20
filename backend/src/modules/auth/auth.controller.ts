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

import { LocalGuard } from '../../guards/local.guard';
import { SMTPService } from '../../services/smtp/smtp.service';
import { User } from '../users/schemas/user.schema';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import CreateUserDto from './dto/createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private smtpService: SMTPService,
  ) {}

  @UseGuards(LocalGuard)
  @Post('login')
  login(@Request() req) {
    return this.authService.login(req.user as User);
  }

  @Post('signup')
  signup(@Body() body: CreateUserDto) {
    try {
      return this.authService.signUp(body);
    } catch (e) {
      return e;
    }
  }

  @Get('reset-password')
  async resetPassword(@Query() query: { toEmail: string }) {
    const user = await this.userService.getUserByEmail(query.toEmail);

    if (!user) {
      throw new BadRequestException('The user does not exists');
    }

    return this.smtpService.sendForgotPasswordEmail(user);
  }
}
