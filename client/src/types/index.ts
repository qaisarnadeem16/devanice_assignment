export type Company = {
  _id: string;
  companyLogo: string;
  companyName: string;
  website?: string;
  address: string;
  country: string;
  phoneNumber?: string;
  hiresPerYear?: number;
  city: string;
  status: string;
  zipcode: string;
  description?: string;
  archive?: boolean | undefined;
};
