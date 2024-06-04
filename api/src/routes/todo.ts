import { Router } from 'express';
import create_task from './controllers/todo/create';
import { get_all_tasks, get_task_by_id }from './controllers/todo/get';
import update_task from './controllers/todo/update';
import delete_task from './controllers/todo/delete';

const router = Router();

router.post('/', create_task);
router.get('/', get_all_tasks);
router.get('/:id', get_task_by_id);
router.put('/:id', update_task);
router.delete('/:id', delete_task);

export default router;
