import { Document } from 'mongoose';

export interface Pet extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
  readonly weight: number;
}
