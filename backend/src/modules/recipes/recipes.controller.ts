/* eslint-disable import/no-unresolved */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Query,
} from '@nestjs/common';

import { JwtGuard } from './../../guards/jwt.guard';
import CreateRecipeDto from './dto/createRecipe.dto';
import { RecipesService } from './recipes.service';
import { Params } from './utils/params';

@UseGuards(JwtGuard)
@Controller('/recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get('/')
  getRecipes(@Query() query: Params) {
    return this.recipesService.getAllRecipes(
      query.title,
      query.skip,
      query.limit,
    );
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
