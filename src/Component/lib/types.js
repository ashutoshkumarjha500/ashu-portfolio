// JavaScript equivalent of the TypeScript types

export const TechDetails = {
  logo: '', // string or StaticImageData
  darkModeLogo: '', // optional: string or StaticImageData
  label: '',
  url: ''
};

export const ExperienceDetails = {
  logo: '', // string or StaticImageData
  darkModeLogo: '', // optional: string or StaticImageData
  logoAlt: '',
  position: '',
  currentlyWorkHere: false, // optional: boolean
  startDate: new Date(), // Date
  endDate: null, // optional: Date
  summary: [] // array of strings
};

export const ProjectDetails = {
  name: '',
  description: '',
  url: '',
  previewImage: '', // string or StaticImageData
  technologies: [] // array of strings
};

export const TestimonialDetails = {
  personName: '',
  personAvatar: '', // optional: string or StaticImageData
  testimonial: '',
  title: ''
};


// // JavaScript equivalent of TechDetails
// export const techDetails = {
//   logo: 'string', // string or StaticImageData
//   darkModeLogo: '', // optional, string or StaticImageData
//   label: '', // string
//   url: '' // string
// };

// // JavaScript equivalent of ExperienceDetails
// export const experienceDetails = {
//   logo: '', // string or StaticImageData
//   darkModeLogo: '', // optional, string or StaticImageData
//   logoAlt: '', // string
//   position: '', // string
//   currentlyWorkHere: false, // optional, boolean
//   startDate: new Date(), // Date object
//   endDate: new Date(), // optional, Date object
//   summary: [] // array of strings
// };

// // JavaScript equivalent of ProjectDetails
// export const projectDetails = {
//   name: '', // string
//   description: '', // string
//   url: '', // string
//   previewImage: '', // string or StaticImageData
//   technologies: [] // array of strings
// };

// // JavaScript equivalent of TestimonialDetails
// export const testimonialDetails = {
//   personName: '', // string
//   personAvatar: '', // optional, string or StaticImageData
//   testimonial: '', // string
//   title: '' // string
// };


// import type { StaticImageData } from 'next/image';

// export type TechDetails = {
//   logo: string | StaticImageData;
//   darkModeLogo?: string | StaticImageData;
//   label: string;
//   url: string;
// };

// export type ExperienceDetails = {
//   logo: string | StaticImageData;
//   darkModeLogo?: string | StaticImageData;
//   logoAlt: string;
//   position: string;
//   currentlyWorkHere?: boolean;
//   startDate: Date;
//   endDate?: Date;
//   summary: string[];
// };

// export type ProjectDetails = {
//   name: string;
//   description: string;
//   url: string;
//   previewImage: string | StaticImageData;
//   technologies: string[];
// };

// export type TestimonialDetails = {
//   personName: string;
//   personAvatar?: string | StaticImageData;
//   testimonial: string;
//   title: string;
// };
