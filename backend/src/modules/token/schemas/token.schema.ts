import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongoSchema } from 'mongoose';

import { User } from './../../users/schemas/user.schema';

export type TokenDocument = Token & Document;

@Schema()
export class Token {
  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'User' })
  user_id: User;

  @Prop({ required: true })
  token: string;

  @Prop({ expires: 3600, default: Date.now() })
  createdAt: Date;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
