export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'recurso no encontrado') {
    super(404, message);
  }
}

export class ValidationError extends AppError {
  constructor(message: string = 'error de validacion') {
    super(400, message);
  }
}

export class ConflictError extends AppError {
  constructor(message: string = 'el recurso ya existe') {
    super(409, message);
  }
}