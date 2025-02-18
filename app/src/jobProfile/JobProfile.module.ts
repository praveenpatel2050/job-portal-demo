import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { connectionString } from 'src/config/db.config';
import { JobProfileSchema } from '../model/JobProfile.model';
import { JobProfileService } from './JobProfile.service';

@Module({
  imports: [
    MongooseModule.forRoot(connectionString),
    MongooseModule.forFeature([
      { name: 'JobProfile', schema: JobProfileSchema },
    ]),
  ],
  providers: [JobProfileService],
  exports: [JobProfileService],
})
export class JobProfileModule {}
