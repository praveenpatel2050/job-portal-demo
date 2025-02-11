import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IJobProfile } from '../model/JobProfile.model';

@Injectable()
export class JobProfileService {
    constructor(
        @InjectModel('JobProfile') private readonly jobProfileModel: Model<IJobProfile>,
    ) {}

    async createJobProfile(jobData: IJobProfile): Promise<IJobProfile> {
        const newJobProfile = new this.jobProfileModel(jobData);
        return newJobProfile.save();
    }

    async getProfileByName(name: string): Promise<IJobProfile | null> {
        return this.jobProfileModel.findByName(name);
    }

    async getProfileByEmail(email: string): Promise<IJobProfile | null> {
        return this.jobProfileModel.findByEmail(email);
    }

    async getProfileByMobile(mobile: number): Promise<IJobProfile | null> {
        return this.jobProfileModel.findByMobile(mobile);
    }

    async getProfilesByExperience(experience: number): Promise<IJobProfile[]> {
        return this.jobProfileModel.findByExperience(experience);
    }

    async getProfilesBySkills(skills: string[]): Promise<IJobProfile[]> {
        return this.jobProfileModel.findBySkills(skills);
    }

    async findByName(name: string): Promise<IJobProfile> {
        return this.jobProfileModel.findOne({ name }).exec();
    }

    async findByEmail(email: string): Promise<IJobProfile> {
        return this.jobProfileModel.findOne({ email }).exec();
    }

    async findByMobile(mobile: number): Promise<IJobProfile> {
        return this.jobProfileModel.findOne({ mobile }).exec();
    }

    async findByExperience(experience: number): Promise<IJobProfile> {
        return this.jobProfileModel.findOne({ experience }).exec();
    }

    async findBySkills(skills: string[]): Promise<IJobProfile[]> {
        return this.jobProfileModel.find({ skills: { $in: skills } }).exec();
    }
}
