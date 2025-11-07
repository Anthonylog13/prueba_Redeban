export type ParameterType = 'string' | 'number' | 'boolean' | 'json' | 'array';

export interface Parameter {
  id: string;
  name: string;
  value: any;
  type: ParameterType;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateParameterDTO {
  name: string;
  value: any;
}

export interface UpdateParameterDTO {
  value: any;
}