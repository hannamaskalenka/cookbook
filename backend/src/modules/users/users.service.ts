import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { AuthService } from './../auth/auth.service';
import CreateUserDto from './dto/createUser.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private authService: AuthService,
  ) {}

  async getUser(username: string): Promise<Partial<User>> {
    try {
      const user = await this.userModel.findOne(
        { username },
        { __v: 0, _id: 0 },
      );

      if (!user) {
        return null;
      }

      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async createUser(user: CreateUserDto) {
    const newUser = new User();

    if (user.password !== user.retypedPassword) {
      throw new BadRequestException('Passwords do not match.');
    }

    const existingUser = await this.getUser(user.username);

    if (existingUser) {
      throw new BadRequestException('Such user already exists.');
    }

    newUser.email = user.email;
    newUser.username = user.username;
    newUser.id = uuidv4();
    newUser.password = await this.authService.hashPassword(user.password);

    const userModel = new this.userModel(newUser);

    await userModel.save();

    return this.authService.login(userModel);
  }
}
