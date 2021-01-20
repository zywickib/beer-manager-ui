/* tslint:disable */
/* eslint-disable */
import { Brewery } from './brewery';
export interface Beer {
  abv?: number;
  brewery?: Brewery;
  controlTraceabilityManual?: boolean;
  creationDate?: string;
  creationUser?: string;
  description?: string;
  ibu?: number;
  id?: string;
  modificationDate?: string;
  modificationUser?: string;
  name?: string;
  persisted?: boolean;
  principal?: {  };
  style?: string;
  version?: number;
}
