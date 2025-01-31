import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getFirstResponse(): object {
    return {
      name: 'John Doe',
      age: 30,
    };
  }
}
