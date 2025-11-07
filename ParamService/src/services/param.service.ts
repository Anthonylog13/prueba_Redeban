import { ParameterRepository } from '../repositories/param.repository';
import { CreateParameterDTO, UpdateParameterDTO, Parameter } from '../models/param.model';
import { TypeDetector } from '../utils/typeDetect';
import { NotFoundError, ConflictError } from '../utils/errors';

export class ParameterService {
  constructor(private repository: ParameterRepository) {}

  async createParameter(data: CreateParameterDTO): Promise<Parameter> {
    const exists = await this.repository.exists(data.name);
    if (exists) {
      throw new ConflictError(`parametro con el nombre '${data.name}' exste`);
    }

    const type = TypeDetector.detectType(data.value);

    return await this.repository.create({
      ...data,
      type,
    });
  }

  async getAllParameters(): Promise<Parameter[]> {
    return await this.repository.findAll();
  }

  async getParameterById(id: string): Promise<Parameter> {
    const parameter = await this.repository.findById(id);
    if (!parameter) {
      throw new NotFoundError(`parametro con el id '${id}' no se encuentra`);
    }
    return parameter;
  }

  async getParameterByName(name: string): Promise<Parameter> {
    const parameter = await this.repository.findByName(name);
    if (!parameter) {
      throw new NotFoundError(`parametro con el nombre '${name}' no encontrado`);
    }
    return parameter;
  }

  async updateParameter(id: string, data: UpdateParameterDTO): Promise<Parameter> {
    await this.getParameterById(id);

    const type = TypeDetector.detectType(data.value);

    return await this.repository.update(id, {
      ...data,
      type,
    });
  }

  async deleteParameter(id: string): Promise<void> {
    await this.getParameterById(id);

    await this.repository.delete(id);
  }
}