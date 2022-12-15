import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { Strategy } from 'passport-local';

import { User, UserDocument } from './../../users/schemas/user.schema';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ username }, { __v: 0, _id: 0 });

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (isPasswordMatching) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = user;
      return rest;
    }
  }
}
