import { Pet } from './pet.interface';

export interface Cat extends Pet {
  readonly hasClippedClaws: boolean;
}
