import { Controller, Get, Query } from '@nestjs/common';
import { JobProfileService } from './job-profile.service';
import { JobProfile } from './job-profile.model';

@Controller('job-profile')
export class JobProfileController {
    constructor(private readonly jobProfileService: JobProfileService) {}

    @Get('name')
    async findByName(@Query('name') name: string): Promise<JobProfile> {
        return this.jobProfileService.findByName(name);
    }

    @Get('email')
    async findByEmail(@Query('email') email: string): Promise<JobProfile> {
        return this.jobProfileService.findByEmail(email);
    }

    @Get('mobile')
    async findByMobile(@Query('mobile') mobile: number): Promise<JobProfile> {
        return this.jobProfileService.findByMobile(mobile);
    }

    @Get('experience')
    async findByExperience(@Query('experience') experience: number): Promise<JobProfile> {
        return this.jobProfileService.findByExperience(experience);
    }

    @Get('skills')
    async findBySkills(@Query('skills') skills: string[]): Promise<JobProfile[]> {
        return this.jobProfileService.findBySkills(skills);
    }
}