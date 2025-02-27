import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IJobProfile, IJobProfileModel } from '../model/JobProfile.model';

@Injectable()
export class JobProfileService {
  constructor(
    @InjectModel('JobProfile')
    private readonly jobProfileModel: Model<IJobProfileModel>,
  ) {}

  async getProfileByName(name: string): Promise<IJobProfile[] | null> {
    return (await this.jobProfileModel
      .findOne({ name })
      .lean()
      .exec()) as unknown as IJobProfile[];
  }

  async getProfileByEmail(email: string): Promise<IJobProfile[] | null> {
    return (await this.jobProfileModel
      .findOne({ email })
      .lean()
      .exec()) as unknown as IJobProfile[];
  }

  async getProfileByMobile(mobile: number): Promise<IJobProfile[] | null> {
    return (await this.jobProfileModel
      .findOne({ mobile })
      .lean()
      .exec()) as unknown as IJobProfile[];
  }

  async getProfilesByExperience(experience: number): Promise<IJobProfile[]> {
    return (await this.jobProfileModel
      .find({ experience })
      .lean()
      .exec()) as unknown as IJobProfile[];
  }

  async getProfilesBySkills(skills: string[]): Promise<IJobProfile[]> {
    return (await this.jobProfileModel
      .find({ skills: { $in: skills } })
      .lean()
      .exec()) as unknown as IJobProfile[];
  }

  async findByName(name: string): Promise<IJobProfile[]> {
    return (await this.jobProfileModel
      .findOne({ name })
      .lean()
      .exec()) as unknown as IJobProfile[];
  }

  async findByEmail(email: string): Promise<IJobProfile[]> {
    return (await this.jobProfileModel
      .findOne({ email })
      .lean()
      .exec()) as unknown as IJobProfile[];
  }

  async findByMobile(mobile: number): Promise<IJobProfile[]> {
    return (await this.jobProfileModel
      .findOne({ mobile })
      .lean()
      .exec()) as unknown as IJobProfile[];
  }

  async findByExperience(experience: number): Promise<IJobProfile[]> {
    return (await this.jobProfileModel
      .findOne({ experience })
      .lean()
      .exec()) as unknown as IJobProfile[];
  }

  async findBySkills(skills: string[]): Promise<IJobProfile[]> {
    return (await this.jobProfileModel
      .find({ skills: { $in: skills } })
      .lean()
      .exec()) as unknown as IJobProfile[];
  }

  async createJobProfile(
      name: string,
      mobile: number,
      email: string,
      experience: number,
      skills: string[],
      resume: string,
  ) {
    const newJobProfile = new this.jobProfileModel({
      name,
      mobile,
      email,
      experience,
      skills,
      resume: resume,
    });

    const result = await newJobProfile.save();
    return result;
  }
}
