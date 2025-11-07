import { TypeDetector } from '../../src/utils/typeDetect';

describe('TypeDetector', () => {
  describe('detectType', () => {
    it('should detect string type', () => {
      expect(TypeDetector.detectType('hello')).toBe('string');
      expect(TypeDetector.detectType('')).toBe('string');
    });

    it('should detect number type', () => {
      expect(TypeDetector.detectType(123)).toBe('number');
      expect(TypeDetector.detectType(0)).toBe('number');
      expect(TypeDetector.detectType(-456)).toBe('number');
      expect(TypeDetector.detectType(3.14)).toBe('number');
    });

    it('should detect boolean type', () => {
      expect(TypeDetector.detectType(true)).toBe('boolean');
      expect(TypeDetector.detectType(false)).toBe('boolean');
    });

    it('should detect array type', () => {
      expect(TypeDetector.detectType([])).toBe('array');
      expect(TypeDetector.detectType([1, 2, 3])).toBe('array');
      expect(TypeDetector.detectType(['a', 'b'])).toBe('array');
    });

    it('should detect json type', () => {
      expect(TypeDetector.detectType({})).toBe('json');
      expect(TypeDetector.detectType({ key: 'value' })).toBe('json');
    });

    it('should handle null and undefined', () => {
      expect(TypeDetector.detectType(null)).toBe('string');
      expect(TypeDetector.detectType(undefined)).toBe('string');
    });
  });

  describe('validateValue', () => {
    it('should validate string values', () => {
      expect(TypeDetector.validateValue('test', 'string')).toBe(true);
      expect(TypeDetector.validateValue(123, 'string')).toBe(false);
    });

    it('should validate number values', () => {
      expect(TypeDetector.validateValue(123, 'number')).toBe(true);
      expect(TypeDetector.validateValue('123', 'number')).toBe(false);
      expect(TypeDetector.validateValue(NaN, 'number')).toBe(false);
    });

    it('should validate boolean values', () => {
      expect(TypeDetector.validateValue(true, 'boolean')).toBe(true);
      expect(TypeDetector.validateValue(false, 'boolean')).toBe(true);
      expect(TypeDetector.validateValue('true', 'boolean')).toBe(false);
    });

    it('should validate array values', () => {
      expect(TypeDetector.validateValue([1, 2, 3], 'array')).toBe(true);
      expect(TypeDetector.validateValue([], 'array')).toBe(true);
      expect(TypeDetector.validateValue({}, 'array')).toBe(false);
    });

    it('should validate json values', () => {
      expect(TypeDetector.validateValue({ key: 'value' }, 'json')).toBe(true);
      expect(TypeDetector.validateValue({}, 'json')).toBe(true);
      expect(TypeDetector.validateValue([], 'json')).toBe(false);
      expect(TypeDetector.validateValue(null, 'json')).toBe(false);
    });
  });
});