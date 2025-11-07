import prisma from '../config/database';
import { Parameter, CreateParameterDTO, UpdateParameterDTO, ParameterType } from '../models/param.model';

export class ParameterRepository {
  // Función helper para mapear de Prisma a tu interfaz
  private mapToParameter(prismaParam: any): Parameter {
    return {
      id: prismaParam.id,
      name: prismaParam.name,
      value: prismaParam.value,
      type: prismaParam.type as ParameterType,
      createdAt: prismaParam.createdAt,
      updatedAt: prismaParam.updatedAt,
    };
  }

  async create(data: CreateParameterDTO & { type: string }): Promise<Parameter> {
    const result = await prisma.parameter.create({
      data: {
        name: data.name,
        value: data.value,
        type: data.type,
      },
    });
    return this.mapToParameter(result);
  }

  async findAll(): Promise<Parameter[]> {
    const results = await prisma.parameter.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return results.map(r => this.mapToParameter(r));
  }

  async findById(id: string): Promise<Parameter | null> {
    const result = await prisma.parameter.findUnique({
      where: { id },
    });
    return result ? this.mapToParameter(result) : null;
  }

  async findByName(name: string): Promise<Parameter | null> {
    const result = await prisma.parameter.findUnique({
      where: { name },
    });
    return result ? this.mapToParameter(result) : null;
  }

  async update(id: string, data: UpdateParameterDTO & { type: string }): Promise<Parameter> {
    const result = await prisma.parameter.update({
      where: { id },
      data: {
        value: data.value,
        type: data.type,
      },
    });
    return this.mapToParameter(result);
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