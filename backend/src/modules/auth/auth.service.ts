import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import { User } from '../users/schemas/user.schema';
import { UsersService } from '../users/users.service';
import CreateUserDto from './dto/createUser.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async login(user: User) {
    const existingUser = await this.usersService.getUser(user.username);

    const payload = {
      username: existingUser?.username,
      sub: existingUser?._id,
    };

    return {
      token: await this.jwtService.sign(payload),
      username: user.username,
    };
  }

  async signUp(user: CreateUserDto) {
    const newUser = new User();

    if (user.password !== user.retypedPassword) {
      throw new BadRequestException('Passwords do not match.');
    }

    const existingUser = await this.usersService.getUser(user.username);

    if (existingUser) {
      throw new BadRequestException('Such user already exists.');
    }

    newUser.email = user.email;
    newUser.username = user.username;
    newUser.password = await this.hashPassword(user.password);

    const userModel = await this.usersService.createUser(newUser);

    return this.login(userModel);
  }

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}
