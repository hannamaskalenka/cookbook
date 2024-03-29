import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import CreateRecipeDto from './dto/createRecipe.dto';
import { Recipe, RecipeDocument } from './schemas/recipe.schema';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
  ) {}

  async getAllRecipes(title, documentsToSkip = 0, limitOfDocuments?: number) {
    const recipes = this.recipeModel
      .find({}, { __v: 0, _id: 0 }, { title })
      .sort({ _id: 1 })
      .skip(documentsToSkip);
    if (limitOfDocuments) {
      recipes.limit(limitOfDocuments);
    }
    const results = await recipes;
    const count = await this.recipeModel.count();
    return { results, count };
  }

  addNewRecipe(recipe: CreateRecipeDto): Promise<Recipe> {
    const recipeModel = new this.recipeModel({ ...recipe, id: uuidv4() });
    return recipeModel.save();
  }

  async updateRecipe(recipeId: string, data): Promise<string> {
    try {
      const updated = await this.recipeModel.findOneAndUpdate(
        { id: recipeId },
        { ...data },
      );

      return updated.id;
    } catch (e) {
      throw new BadRequestException('Something went wrong...');
    }
  }

  async deleteRecipe(recipeId: string) {
    try {
      const res = await this.recipeModel.deleteOne({ id: recipeId });
      if (res.deletedCount === 0) {
        throw new NotFoundException('Recipe not found');
      }
    } catch (e) {
      console.log(e);
    }
  }
}
