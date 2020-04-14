import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/ping')
  ping(): { success: boolean } {
    return { success: true };
  }
}
