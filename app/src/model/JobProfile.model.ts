import { Model } from 'mongoose';

export interface IJobProfile {
  name: { type: String, required: true },
  mobile: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  experience: { type: Number, required: true },
  skills: { type: [String], required: true },
  resume: { type: String, required: true },
}

export interface IJobProfileModel extends Model<IJobProfile> {
  findByName(name: string): Promise<IJobProfile>;
  findByEmail(email: string): Promise<IJobProfile>;
  findByMobile(mobile: number): Promise<IJobProfile>;
  findByExperience(experience: number): Promise<IJobProfile>;
  findBySkills(skills: string[]): Promise<IJobProfile[]>;
}
