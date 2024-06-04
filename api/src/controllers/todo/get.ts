import { RequestHandler } from 'express';
import Task from '@models/Task';


const get_all_tasks: RequestHandler = (req, res) => {
  const userId = req.body.userId;
  Task.findAll({ where: { userId } })
  .then((tasks) => res.status(200).json(tasks))
  .catch((error) => res.status(500).json({ message: error.message }));
};

const get_task_by_id: RequestHandler = (req, res) => {
  const userId = req.body.userId;
  const id = req.params.id;
  Task.findOne({ where: { userId, id } })
  .then((task) => res.status(200).json(task))
  .catch((error) => res.status(500).json({ message: error.message }));
};

export { get_all_tasks, get_task_by_id };
