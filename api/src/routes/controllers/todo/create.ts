import { RequestHandler } from 'express';
import Task from '@models/Task';
import { z } from 'zod';


const schema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.string(),
  userId: z.number(),
});

const create: RequestHandler = (req, res) => {
  const { title, description, status, userId } = schema.parse(req.body);
  
  Task.create({ title, description, status, userId })
    .then((task) => res.status(201).json(task))
    .catch((error) => res.status(500).json({ message: error.message }));
};

export default create;
