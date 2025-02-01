import { Model } from 'mongoose';

export interface IJobProfile {
  name: string;
  mobile: number;
  email: string;
  experience: number;
  skills: string[];
  resume: string;
}

export interface IJobProfileModel extends Model<IJobProfile> {
  findByName(name: string): Promise<IJobProfile>;
  findByEmail(email: string): Promise<IJobProfile>;
  findByMobile(mobile: number): Promise<IJobProfile>;
  findByExperience(experience: number): Promise<IJobProfile>;
  findBySkills(skills: string[]): Promise<IJobProfile[]>;
}
