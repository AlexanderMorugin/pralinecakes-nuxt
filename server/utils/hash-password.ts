import bcrypt from "bcryptjs";

export const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};

export const comparePassword = (textPassword: string, hashPassword: string) => {
  return bcrypt.compareSync(textPassword, hashPassword);
};
