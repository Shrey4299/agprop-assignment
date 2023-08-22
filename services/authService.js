const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = {
    user: {
      id: user.id
    }
  };

  return jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' }); 
};

module.exports = generateToken;
