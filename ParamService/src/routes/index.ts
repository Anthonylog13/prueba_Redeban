import { Router } from 'express';
import parameterRoutes from './param.routes';

const router = Router();

router.use('/parameters', parameterRoutes);

router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'servicio activo',
    timestamp: new Date().toISOString(),
  });
});

export default router;