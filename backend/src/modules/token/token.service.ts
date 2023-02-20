import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from '../users/schemas/user.schema';
import { Token, TokenDocument } from './schemas/token.schema';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token.name) private tokenModel: Model<TokenDocument>,
  ) {}

  getToken(userId: User) {
    return this.tokenModel.findOne({ user_id: userId }, { __v: 0, _id: 0 });
  }

  async setToken(userId: User, tokenHash: string) {
    const token = new this.tokenModel({
      userId,
      token: tokenHash,
      createdAt: Date.now(),
    });

    await token.save();

    return token;
  }
}
