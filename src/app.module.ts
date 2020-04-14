import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/task', {
      useNewParser: true,
    }),
    PetsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
