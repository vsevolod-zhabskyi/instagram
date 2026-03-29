import { Controller, Get } from '@nestjs/common';
import { Public } from '@thallesp/nestjs-better-auth';

@Controller()
export class AppController {
  @Get()
  @Public()
  getHello(): string {
    return 'Hello World!';
  }
}
