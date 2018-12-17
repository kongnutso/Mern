export type Tour = {
  tourId: string;
  tourName: string;
  minimumSize: number;
  maximumSize: number;
  price: number;
  detail: string;
  userId: string;
  imageUrl: string | null;
};

export type Gender = "Male" | "Female";

export type User = {
  userId: string;
  firstName: string;
  lastName: string;
  profileImageUrl: string | null;
  publishedTour: Tour[];
  gender: Gender;
  age: number;
  facebookUrl: string;
  instagramUrl: string;
  phoneNumber: string;
  token: string;
};

export type UserContact = {
  facebookUrl: string;
  instagramUrl: string;
  phoneNumber: string;
};
