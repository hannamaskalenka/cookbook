import { INutrition } from '../../../interfaces/index';
export default class CreateRecipeDto {
  title: string;
  ingredients: string[];
  steps: string[];
  nutrition: INutrition;
  meta: {
    rating: number;
  };
}
