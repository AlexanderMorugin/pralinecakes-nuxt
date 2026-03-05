import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.public.jwtAccessSecret, {
    expiresIn: "1m",
  });
};

const generateRefreshToken = (user) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.public.jwtRefreshSecret, {
    expiresIn: "30m",
  });
};

export const decodeRefreshToken = (token) => {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.public.jwtRefreshSecret);
  } catch (error) {
    return null;
  }
};

export const decodeAccessToken = (token) => {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.public.jwtAccessSecret);
  } catch (error) {
    return null;
  }
};

export const generateTokens = (user) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return { accessToken, refreshToken };
};
