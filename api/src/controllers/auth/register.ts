import { RequestHandler } from 'express';
import User from '@models/User';
import bcrypt from 'bcrypt';
import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().min(3).max(128),
  email: z.string().email(),
  password: z.string().min(6).max(128),
});

const register: RequestHandler = async (req, res) => {
  
  const { name, email, password } = registerSchema.parse(req.body);

  if (!name || !email || !password) {
    res.status(400).json({ message: 'Name, email and password are required' });
    return;
  }

  User.findOne({ where: { email } })
  .then((user) => {
    if(user) {
      res.status(400).json({ message: 'Email already in use' });
      return;
    }

    const hash = bcrypt.hashSync(password, 10);
    User.create({ name, email, password: hash })
    .then(() => {
      res.json({ message: 'User created' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
      console.error(error);
    });
  })

};

export default register;
