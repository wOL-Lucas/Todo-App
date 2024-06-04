import Task from '@models/Task';
import { RequestHandler } from 'express';



const delete_task: RequestHandler = (req, res) => {

  const { id } = req.params;
  const userId = req.body.userId;

  Task.findAll({ where: { id, userId } })
  .then((task) => {
    if (task.length === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    Task.destroy({ where: { id, userId } });
    return res.status(200).json({ message: 'Task deleted' });
  })
  .catch((error) => {
    res.status(500).json({ message: 'Internal server error' });
    console.error(error);
  });
};

export default delete_task;
