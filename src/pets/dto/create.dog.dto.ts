import { CreatePetDto } from './create.pet.dto';

export class CreateDogDto extends CreatePetDto {
  readonly wagsTail: boolean;
}
