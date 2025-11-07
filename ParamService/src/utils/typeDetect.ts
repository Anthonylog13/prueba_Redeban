import { ParameterType } from '../models/param.model';

export class TypeDetector {
  static detectType(value: any): ParameterType {
    if (value === null || value === undefined) {
      return 'string';
    }

    if (Array.isArray(value)) {
      return 'array';
    }

    if (typeof value === 'boolean') {
      return 'boolean';
    }

    if (typeof value === 'number') {
      return 'number';
    }

    if (typeof value === 'object') {
      return 'json';
    }

    return 'string';
  }

  static validateValue(value: any, type: ParameterType): boolean {
    switch (type) {
      case 'string':
        return typeof value === 'string';
      case 'number':
        return typeof value === 'number' && !isNaN(value);
      case 'boolean':
        return typeof value === 'boolean';
      case 'array':
        return Array.isArray(value);
      case 'json':
        return typeof value === 'object' && value !== null && !Array.isArray(value);
      default:
        return false;
    }
  }
}