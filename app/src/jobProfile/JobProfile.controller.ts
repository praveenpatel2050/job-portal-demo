import { Controller, Get, Query } from '@nestjs/common';
import { JobProfileService } from './JobProfile.service';
import { IJobProfile } from '../model/JobProfile.model';

@Controller('/job-profile')
export class JobProfileController {
  constructor(private readonly jobProfileService: JobProfileService) {}

  @Get('name')
  async findByName(@Query('name') name: string): Promise<IJobProfile[]> {
    return this.jobProfileService.findByName(name);
  }

  @Get('email')
  async findByEmail(@Query('email') email: string): Promise<IJobProfile[]> {
    return this.jobProfileService.findByEmail(email);
  }

  @Get('mobile')
  async findByMobile(@Query('mobile') mobile: number): Promise<IJobProfile[]> {
    return this.jobProfileService.findByMobile(mobile);
  }

  @Get('experience')
  async findByExperience(
    @Query('experience') experience: number,
  ): Promise<IJobProfile[]> {
    return this.jobProfileService.findByExperience(experience);
  }

  @Get('skills')
  async findBySkills(
    @Query('skills') skills: string[],
  ): Promise<IJobProfile[]> {
    return this.jobProfileService.findBySkills(skills);
  }
}
