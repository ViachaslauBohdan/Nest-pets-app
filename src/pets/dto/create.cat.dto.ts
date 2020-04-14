import { CreatePetDto } from './create.pet.dto';

export class CreateCatDto extends CreatePetDto {
  readonly hasClippedClaws: boolean;
}
