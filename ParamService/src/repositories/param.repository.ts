import prisma from '../config/database';
import { Parameter, CreateParameterDTO, UpdateParameterDTO } from '../models/param.model';
import { NotFoundError } from '../utils/errors';

export class ParameterRepository {
  async create(data: CreateParameterDTO & { type: string }): Promise<Parameter> {
    return await prisma.parameter.create({
      data: {
        name: data.name,
        value: data.value,
        type: data.type,
      },
    });
  }

  async findAll(): Promise<Parameter[]> {
    return await prisma.parameter.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string): Promise<Parameter | null> {
    return await prisma.parameter.findUnique({
      where: { id },
    });
  }

  async findByName(name: string): Promise<Parameter | null> {
    return await prisma.parameter.findUnique({
      where: { name },
    });
  }

  async update(id: string, data: UpdateParameterDTO & { type: string }): Promise<Parameter> {
    return await prisma.parameter.update({
      where: { id },
      data: {
        value: data.value,
        type: data.type,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.parameter.delete({
      where: { id },
    });
  }

  async exists(name: string): Promise<boolean> {
    const count = await prisma.parameter.count({
      where: { name },
    });
    return count > 0;
  }
}