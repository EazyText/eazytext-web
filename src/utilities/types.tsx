export type legalNoticesType = {
  title: string;
  list?: string[];
  paragraph: { text?: string; list?: string[] | null }[];
};

export type modalGenericType = {
  [key: string]: boolean;
};

export type authDataType = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};
