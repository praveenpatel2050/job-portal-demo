import { Schema, Model, model } from 'mongoose';

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

const JobProfileSchema = new Schema<IJobProfile>({
  name: { type: String, required: true },
  mobile: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  experience: { type: Number, required: true },
  skills: { type: [String], required: true },
  resume: { type: String, required: true },
});

JobProfileSchema.statics.findByName = async function (name: string) {
  return this.findOne({ name });
};

JobProfileSchema.statics.findByEmail = async function (email: string) {
  return this.findOne({ email });
};

JobProfileSchema.statics.findByMobile = async function (mobile: number) {
  return this.findOne({ mobile });
};

JobProfileSchema.statics.findByExperience = async function (experience: number) {
  return this.find({ experience });
};

JobProfileSchema.statics.findBySkills = async function (skills: string[]) {
  return this.find({ skills: { $in: skills } });
};

export const JobProfileModel = model<IJobProfile, IJobProfileModel>('JobProfile', JobProfileSchema);
