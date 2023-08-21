export type User = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
};

export type Token = {
  token: string;
  userId: string;
};
