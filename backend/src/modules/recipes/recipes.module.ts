import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { Recipe, RecipeSchema } from './schemas/recipe.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Recipe.name,
        useFactory: () => {
          const schema = RecipeSchema;
          schema.pre('save', () => console.log('Database is loaded...'));

          return schema;
        },
      },
    ]),
  ],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
