/* tslint:disable */
/* eslint-disable */
import { BreweryDto } from './brewery-dto';
export interface BeerResultDto {
  abv?: number;
  brewery?: BreweryDto;
  description?: string;
  ibu?: number;
  id?: string;
  name?: string;
  style?: string;
}
