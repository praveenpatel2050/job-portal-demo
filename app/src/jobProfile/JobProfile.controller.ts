import {Body, Controller, Get, Post, Query, Req} from '@nestjs/common';
import { JobProfileService } from './JobProfile.service';
import { IJobProfile } from '../model/JobProfile.model';
import {MulterRequest} from "../utils/MulterRequest";

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

  @Post('create-profile')
  async createProfile(
      @Body() body: { name: string; mobile: number; email: string; experience: number; skills: string[] },
      @Req() req: MulterRequest,
  ) {
    const { name, mobile, email, experience, skills } = body;
    const resume = req.file.path;

    const result = await this.jobProfileService.createJobProfile(
        name,
        mobile,
        email,
        experience,
        skills,
        resume,
    );

    return {
      message: 'Job profile created successfully',
      data: result,
    };
  }
}
