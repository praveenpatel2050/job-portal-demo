import { Document, Model, model, Schema } from 'mongoose';

export interface IJobProfile extends Document {
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

export const JobProfileSchema = new Schema<IJobProfile>({
  name: { type: String, required: true },
  mobile: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  experience: { type: Number, required: true },
  skills: { type: [String], required: true },
  resume: { type: String, required: true },
});

JobProfileSchema.statics.findByName = async function (name: string) {
  return await this.findOne({ name });
};

JobProfileSchema.statics.findByEmail = async function (email: string) {
  return await this.findOne({ email });
};

JobProfileSchema.statics.findByMobile = async function (mobile: number) {
  return await this.findOne({ mobile });
};

JobProfileSchema.statics.findByExperience = async function (
  experience: number,
) {
  return await this.find({ experience });
};

JobProfileSchema.statics.findBySkills = async function (skills: string[]) {
  return await this.find({ skills: { $in: skills } });
};

export const JobProfileModel = model<IJobProfile, IJobProfileModel>(
  'JobProfile',
  JobProfileSchema,
);
