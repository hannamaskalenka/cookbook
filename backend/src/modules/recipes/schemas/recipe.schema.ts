import { Document } from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
  @Prop()
  id: string;
  @Prop()
  title: string;

  @Prop([String])
  ingredients: string[];

  @Prop([String])
  steps: string[];

  @Prop(
    raw({
      calories: { type: Number },
      fat: { type: Number },
      protein: { type: Number },
      carbs: { type: Number },
    }),
  )
  nutrition: Record<string, any>;

  @Prop(
    raw({
      rating: { type: Number },
    }),
  )
  meta: Record<string, any>;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
