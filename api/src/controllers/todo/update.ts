import { RequestHandler } from 'express';
import Task from '@models/Task';
import { z } from 'zod';


const schema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.string(),
  userId: z.number(),
});


const update: RequestHandler = (req, res) => {
  const id = req.params.id;
  const { title, description, status, userId } = schema.parse(req.body);

  Task.findAll({ where: { id, userId } })
  .then((tasks) => {
    if (tasks.length === 0) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }

    Task.update({ title, description, status }, { where: { id, userId } })
    .then(() => res.status(200).json({ message: 'Task updated' }))
    .catch((error) => res.status(500).json({ message: error.message }));
  })
};


export default update;
