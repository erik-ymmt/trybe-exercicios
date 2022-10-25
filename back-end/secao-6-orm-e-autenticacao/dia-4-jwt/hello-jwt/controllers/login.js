require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (user) => {
  const { username, password } = user;
  let admin = false;

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  if (username === 'admin' && password === 's3nh4S3gur4???') {
    admin = true;
  }

  const token = jwt.sign(
    { data: { user: username, admin } },
    secret,
    jwtConfig,
  );

  return token;
};

const authenticateLogin = (req, res) => {
  const user = req.body;
  try {
    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = authenticateLogin;