import { Document } from 'mongoose';
import { Cat } from './cat.interface';
import { Dog } from './dog.interface';

export interface Owner extends Document {
  readonly name: string;
  readonly age: number;
  readonly cats: Cat[];
  readonly dogs: Dog[];
}
