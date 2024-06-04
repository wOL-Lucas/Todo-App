import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


class decodedToken {
  id?: number;
  iat?: number;
  exp?: number;
}

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET || '!#@$@!#$!@#$!@#$!@#$!@#$!@#');
    
    const decoded = jwt.decode(token) as decodedToken;
    req.body.userId = decoded.id;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

