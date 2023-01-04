import { Type } from 'class-transformer';
import { IsNumber, Min, IsOptional, IsString } from 'class-validator';

export class recipeParams {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  skip?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number;
}
