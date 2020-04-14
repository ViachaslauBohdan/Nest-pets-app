import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogSchema } from './schemas/dog.schema';
import { CatSchema } from './schemas/cat.schema';
import { OwnerSchema } from './schemas/owner.schema';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Dog', schema: DogSchema },
      { name: 'Cat', schema: CatSchema },
      { name: 'Owner', schema: OwnerSchema },
    ]),
  ],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
