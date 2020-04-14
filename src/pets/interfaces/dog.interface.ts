import { Pet } from './pet.interface';

export interface Dog extends Pet {
  readonly wagsTail: boolean;
}
