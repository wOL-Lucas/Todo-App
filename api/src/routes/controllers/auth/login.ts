import { RequestHandler, response } from 'express';
import jwt from 'jsonwebtoken';
import User from '@models/User';
import bcrypt from 'bcrypt';

const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required' });
    return;
  }

  User.findOne({ where: { email } })
  .then((user) => {
    if (user && bcrypt.compareSync(password, user.dataValues.password)) {
      const token = jwt.sign({ id: user.dataValues.id }, process.env.JWT_SECRET || '!#@$@!#$!@#$!@#$!@#$!@#$!@#', {expiresIn: '1h'});
      res.json({ token });
    }
    else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  })
  .catch((error) => {
    res.status(500).json({ message: 'Internal server error' });
    console.error(error);
  });
}

export default login;
