import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobProfileController } from './jobProfile/JobProfile.controller';
import { JobProfileModule } from './jobProfile/JobProfile.module';

@Module({
  imports: [JobProfileModule],
  controllers: [AppController, JobProfileController],
  providers: [AppService],
})
export class AppModule {}
