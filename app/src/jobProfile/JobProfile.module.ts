import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { JobProfileModel } from '../model/JobProfile.model';
import { JobProfileService } from './JobProfile.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'JobProfile', schema: JobProfileModel}])],
    providers: [JobProfileService],
    exports: [JobProfileService],
})
export class JobProfileModule {}
