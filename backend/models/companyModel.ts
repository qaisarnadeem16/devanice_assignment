import mongoose, { Document, Schema, Model } from "mongoose";

// Define an interface representing a document in MongoDB.
interface ICompany extends Document {
  companyLogo: string;
  companyName: string;
  websiteLink?: string;
  hiresPerYear?: string;
  address: string;
  city: string;
  phoneNumber?: string;
  country: string;
  description?: string;
  status?: string;
  agreeTerms: boolean;
  agreeGDPR: boolean;
  archive: boolean;
}

// Define the schema corresponding to the document interface.
const companySchema: Schema<ICompany> = new Schema(
  {
    companyLogo: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    websiteLink: {
      type: String,
      trim: true,
    },
    hiresPerYear: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      default: "in progress",
    },
    archive: {
      type: Boolean,
      default: false,
    },
    agreeTerms: {
      type: Boolean,
      required: true,
    },
    agreeGDPR: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create the model from the schema and export it.
const Company: Model<ICompany> = mongoose.model<ICompany>(
  "Company",
  companySchema
);

export default Company;
