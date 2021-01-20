/* tslint:disable */
/* eslint-disable */
import { Brewery } from './brewery';
export interface BeerUpdateDto {
  abv?: number;
  brewery?: Brewery;
  description?: string;
  ibu?: number;
  name?: string;
  style?: string;
}
