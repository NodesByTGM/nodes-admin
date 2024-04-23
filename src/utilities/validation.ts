/* eslint-disable @typescript-eslint/no-explicit-any */
import { object, string, ref, bool, array, number } from "yup";

export const signupSchema = object({
  name: string().required("Name is a required field"),
  email: string().email().required("Email is a required field"),
  username: string().required("Username is a required field"),
  dob: string().required("DOB field is required"),
  password: string().required("Password is a required field"),
  confirmPassword: string()
    .required("Confirm Password is a required field")
    .oneOf([ref("password")], "Passwords must match"),
  otp: string(),
});

export type SignupValidationType = {
  name: string;
  email: string;
  username: string;
  dob: string;
  password: string;
  confirmPassword: string;
  otp: string;
};

export const adminSignupSchema = object({
  firstName: string().required("First name is a required field"),
  lastName: string().required("Last name is a required field"),
  email: string().email().required("Email is a required field"),

  password: string().required("Password is a required field"),
  confirmPassword: string()
    .required("Confirm Password is a required field")
    .oneOf([ref("password")], "Passwords must match"),
  otp: string(),
});

export type AdminSignupValidationType = {
  firstName: string;
  lastName: string;
  email: string;

  password: string;
  confirmPassword: string;
  otp: string;
};
export const profileSchema = object({
  firstName: string().required("first name is a required field"),
  lastName: string().required("Last name is a required field"),
  username: string().required("Username is a required field"),
  avatar: object()
    .shape({
      id: string(),
      url: string(),
    })
    .nullable(),
  location: string(),
  height: string(),
  age: string(),
  headline: string(),
  bio: string(),
  website: string(),
  linkedIn: string(),
  instagram: string(),
  twitter: string(),
  projectName: string(),
  description: string(),
  projectUrl: string(),
  spaces: bool(),
  comments: bool(),
  collaborators: array().of(
    object().shape({
      name: string(),
      role: string(),
      collabName: string(),
    })
  ),
});

export type profileValidationType = {
  firstName: string;
  lastName: string;
  username: string;
  avatar: {
    id: string;
    url: string;
  };
  location: string;
  height: string;
  age: string;
  headline: string;
  bio: string;
  website: string;
  linkedIn: string;
  instagram: string;
  twitter: string;
  projectName: string;
  description: string;
  projectUrl: string;
  spaces: boolean;
  comments: boolean;
  collaborators: [
    {
      name: string;
      role: string;
      collabName: string;
    }
  ];
};

export const projectSchema = object({
  name: string().required("Project name is a required field"),
  description: string(),
  projectURL: string(),
  thumbnail: object().shape({
    id: string(),
    url: string(),
  }),
  images: array().of(
    object().shape({
      id: string(),
      url: string(),
    })
  ),
  collaborators: array().of(
    object().shape({
      name: string(),
      role: string(),
      collabName: string(),
    })
  ),
});
export type projectValidationType = {
  name: string;
  description: string;
  projectURL: string;
  thumbnail: {
    id: string;
    url: string;
  };
  images:
    | [
        {
          id: string;
          url: string;
        }
      ]
    | any;
  collaborators: [
    {
      name: string;
      role: string;
      collabName: string;
    }
  ];
};

export const spaceSchema = object({
  name: string().required("Project name is a required field"),
  category: string(),
  description: string(),

  rules: array().of(
    object().shape({
      title: string(),
      description: string(),
      ruleTitle: string(),
    })
  ),
});

export type spaceValidationType = {
  name: string;
  category: string;
  description: string;
  rules: [
    {
      title: string;
      description: string;
      ruleTitle: string;
    }
  ];
};

export const paymentSchema = object({
  name: string().required("Name is a required field"),
  cardNumber: number()
    .required("Card number is a required field")
    .nullable()
    .test(
      "len",
      "Must be exactly 12 characters",
      (val) => String(val)?.length === 12
    ),
  expDate: number()
    .required("Expiration date is a required field")
    .nullable()
    .test(
      "len",
      "Must be exactly 12 characters",
      (val) => String(val)?.length === 12
    ),
  cvc: number()
    .required("CVC is a required field")
    .nullable()
    .test(
      "len",
      "Must be exactly 12 characters",
      (val) => String(val)?.length === 12
    ),
});

export type paymentValidationType = {
  name: string;
  cardNumber: number | string;
  expDate: number | string;
  cvc: number | string;
};

export const jobSchema = object({
  name: string(),
  description: string(),
  hoursPerWeek: number(),
  location: string(),
  experience: string(),
  payRate: number(),
  workRate: string(),
  skills: array().of(string()),
  jobType: number(),
});
export type jobValidationType = {
  name: string;
  description: string;
  hoursPerWeek: number;
  location: string;
  experience: string;
  payRate: number;
  workRate: string;
  skills: Array<string>;
  jobType: number;
};

export const eventSchema = object({
  name: string(),
  description: string(),
  location: string(),
  dateTime: string(),
  paymentType: string(),
  thumbnail: object().shape({
    id: string(),
    url: string(),
  }),
});
export type eventValidationType = {
  name: string;
  description: string;
  location: string;
  dateTime: string;
  paymentType: string;
  thumbnail: {
    id: string;
    url: string;
  };
};

export const postSchema = object({
  body: string(),
  attachments: array().of(
    object().shape({
      id: string(),
      url: string(),
    })
  ),
  hashtags: array().of(string()),
});

export type postValidationType = {
  body: string;
  attachments:
    | [
        {
          id: string;
          url: string;
        }
      ]
    | any;
  hashtags: [string];
};

export const resetPasswordSchema = object({
  password: string().required("Password is a required field"),
  confirmPassword: string()
    .required()
    .oneOf([ref("password")], "Passwords must match"),
});
export type ResetPasswordType = {
  password: string;
  confirmPassword: string;
};

export const loginSchema = object({
  email: string().email().required("Email is a required field"),
  password: string().required(),
});

export type LoginValidationType = {
  email: string;
  password: string;
};

export const emailSchema = object({
  email: string().email().required("Email is a required field"),
});

export type EmailValidationType = {
  email: string;
};

export type PersonalIndividualInformationType = {
  firstName: string;
  lastName: string;
  location: string;
  headline: string;
  bio: string;
  website: string;
  linkedIn: string;
  instagram: string;
  x: string;
  spaces: boolean;
  comments: boolean;
};

export const PersonalIndividualInformationSchema = {
  firstName: string(),
  lastName: string(),
  location: string(),
  headline: string(),
  bio: string(),
  website: string(),
  linkedIn: string(),
  instagram: string(),
  x: string(),
  spaces: bool(),
  comments: bool(),
};

export const accountSettingsSchema = object({
  name: string().required("Name is a required field"),
  username: string().required("Username is a required field"),
  email: string().email().required("Email is a required field"),
  day: string().required(),
  month: string().required(),
  year: string().required(),
  visibility: string().required(),
});

export type AccountSettingsValidationType = {
  name: string;
  username: string;
  email: string;
  day: string;
  month: string;
  year: string;
  visibility: string;
};
