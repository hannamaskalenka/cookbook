import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { JwtGuard } from './../../guards/jwt.guard';
import CreateRecipeDto from './dto/createRecipe.dto';
import { RecipesService } from './recipes.service';

@UseGuards(JwtGuard)
@Controller('/recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get('/')
   getRecipes(query) {
    return this.recipesService.getAllRecipes(query);
  }

  @Post('/')
  addNewRecipe(@Body() body: CreateRecipeDto) {
    return this.recipesService.addNewRecipe(body);
  }

  @Put('/:recipeId')
  updateRecipe(
    @Param('recipeId') recipeId: string,
    @Body() body: Partial<CreateRecipeDto>,
  ) {
    return this.recipesService.updateRecipe(recipeId, body);
  }

  @Delete('/:recipeId')
  deleteRecipe(@Param('recipeId') recipeId: string) {
    return this.recipesService.deleteRecipe(recipeId);
  }
}
