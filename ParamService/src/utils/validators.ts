import { z } from 'zod';

export const createParameterSchema = z.object({
  name: z.string().min(1, 'nombre es requerido').max(100, 'nombre demasiado largo'),
  value: z.any(),
});

export const updateParameterSchema = z.object({
  value: z.any(),
});

export const parameterIdSchema = z.object({
  id: z.string().uuid('formato de id no valido'),
});

export const parameterNameSchema = z.object({
  name: z.string().min(1, 'nombre es requerido'),
});