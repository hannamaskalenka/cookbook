import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUser(username: string): Promise<any> {
    try {
      const user = await this.userModel.findOne({ username }).exec();

      if (!user) {
        return null;
      }

      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async getUserByEmail(email: string): Promise<Partial<UserDocument>> {
    try {
      const user = await this.userModel.findOne({ email }, { __v: 0 });

      if (!user) {
        return null;
      }

      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async createUser(user: User) {
    const userModel = new this.userModel(user);
    await userModel.save();
    return userModel;
  }
}
