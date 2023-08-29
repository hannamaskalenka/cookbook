import {
  Request,
  Controller,
  Get,
  Post,
  UseGuards,
  Body,
  Req,
} from '@nestjs/common';

import { AppService } from './app.service';
import { GoogleGuard } from './guards/google.guard';
import { LocalGuard } from './guards/local.guard';
import { AuthService } from './modules/auth/auth.service';
import CreateUserDto from './modules/users/dto/createUser.dto';
import { User } from './modules/users/schemas/user.schema';
import { UsersService } from './modules/users/users.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private readonly appService: AppService,
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

  @UseGuards(GoogleGuard)
  @Get('/google')
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  async googleAuth(@Req() req) {}

  @UseGuards(GoogleGuard)
  @Get('/google/redirect')
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
