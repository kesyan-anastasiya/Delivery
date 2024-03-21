const jwt = require('jsonwebtoken');

// функция генирации токена, принимает в себя полезную нагрузку
const generateTokens = (payload) => ({
  accessToken: jwt.sign(payload, 'A', {
    expiresIn: `${1000 * 60 * 5}`,
  }),
  refreshToken: jwt.sign(payload, 'R', {
    expiresIn: `${1000 * 60 * 60 * 12}`,
  }),
});

module.exports = generateTokens;
