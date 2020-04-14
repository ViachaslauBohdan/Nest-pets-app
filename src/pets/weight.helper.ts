import { Dog } from './interfaces/dog.interface';
import { Cat } from './interfaces/cat.interface';

let totalWeight = 0;

export function getTotalWeight(pets: Dog[] | Cat[]): number {
  for (const { weight } of pets) {
    totalWeight += weight;
  }

  return totalWeight;
}
