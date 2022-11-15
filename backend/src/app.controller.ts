import {
  Request,
  Controller,
  Get,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';

import { UsersService } from './modules/users/users.service';
import { AppService } from './app.service';
import { LocalGuard } from './guards/local.guard';
import { AuthService } from './modules/auth/auth.service';
import { User } from './modules/users/schemas/user.schema';
import CreateUserDto from './modules/users/dto/createUser.dto';

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

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
