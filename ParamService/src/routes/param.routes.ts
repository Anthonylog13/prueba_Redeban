import { Router } from 'express';
import { ParameterController } from '../controllers/param.controller';
import { ParameterService } from '../services/param.service';
import { ParameterRepository } from '../repositories/param.repository';

const router = Router();


const repository = new ParameterRepository();
const service = new ParameterService(repository);
const controller = new ParameterController(service);


router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/name/:name', controller.getByName);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;