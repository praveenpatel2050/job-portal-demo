import { Module } from '@nestjs/common';
import  MongooseModule from 'mongoose';
import { JobProfileModel } from '../model/JobProfile.model';
import { JobProfileService } from './JobProfile.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'JobProfile', schema: JobProfileModel.schema }])],
    providers: [JobProfileService],
    exports: [JobProfileService],
})
export class JobProfileModule {}
