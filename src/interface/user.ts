export type User = {
  email: string;
  pass_word: string;
  full_name: string;
  age: number;
  // avatar: string | null;
};

export type Login = {
  email: string;
  pass_word: string;
};
export type InfoUser = {
  token: string;
  user_id: number;
};
