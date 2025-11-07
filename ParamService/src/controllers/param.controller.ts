import { Request, Response, NextFunction } from 'express';
import { ParameterService } from '../services/param.service';
import { createParameterSchema, updateParameterSchema } from '../utils/validators';
import { ValidationError } from '../utils/errors';

export class ParameterController {
  constructor(private service: ParameterService) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const validation = createParameterSchema.safeParse(req.body);
      if (!validation.success) {
        throw new ValidationError(validation.error.issues[0].message);
      }

      const parameter = await this.service.createParameter(validation.data);
      res.status(201).json({
        success: true,
        data: parameter,
        message: 'Parametro creado correctamente',
      });
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const parameters = await this.service.getAllParameters();
      res.status(200).json({
        success: true,
        data: parameters,
        count: parameters.length,
      });
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const parameter = await this.service.getParameterById(id);
      res.status(200).json({
        success: true,
        data: parameter,
      });
    } catch (error) {
      next(error);
    }
  };

  getByName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { name } = req.params;
      const parameter = await this.service.getParameterByName(name);
      res.status(200).json({
        success: true,
        data: parameter,
      });
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const validation = updateParameterSchema.safeParse(req.body);
      if (!validation.success) {
        throw new ValidationError(validation.error.issues[0].message);
      }

      const parameter = await this.service.updateParameter(id, validation.data);
      res.status(200).json({
        success: true,
        data: parameter,
        message: 'Parametro actualizado correctamente',
      });
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      await this.service.deleteParameter(id);
      res.status(200).json({
        success: true,
        message: 'Parametro eliminado correctamente',
      });
    } catch (error) {
      next(error);
    }
  };
}