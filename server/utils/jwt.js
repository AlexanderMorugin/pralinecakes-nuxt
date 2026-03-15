import jwt from "jsonwebtoken";

export const generateAccessToken = (userId) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: userId }, config.public.jwtAccessSecret, {
    // expiresIn: "1m",
    expiresIn: "20",
  });
};

export const generateRefreshToken = (userId) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: userId }, config.public.jwtRefreshSecret, {
    // expiresIn: "30d",
    expiresIn: "1m",
    // expiresIn: "30",
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

export const generateTokens = (userId) => {
  const accessToken = generateAccessToken(userId);
  const refreshToken = generateRefreshToken(userId);

  return { accessToken, refreshToken };
};
