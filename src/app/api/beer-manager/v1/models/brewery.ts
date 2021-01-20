/* tslint:disable */
/* eslint-disable */
import { Beer } from './beer';
export interface Brewery {
  beer?: Array<Beer>;
  controlTraceabilityManual?: boolean;
  creationDate?: string;
  creationUser?: string;
  id?: string;
  logo?: string;
  modificationDate?: string;
  modificationUser?: string;
  name?: string;
  persisted?: boolean;
  principal?: {  };
  version?: number;
}
