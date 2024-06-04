import { Router } from 'express';
import create from './controllers/todo/create';
import { get_all, get_by_id }from './controllers/todo/get';
import update from './controllers/todo/update';

const router = Router();

router.post('/', create);
router.get('/', get_all);
router.get('/:id', get_by_id);
router.put('/:id', update);

export default router;
