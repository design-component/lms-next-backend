import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { MongoServerError } from 'mongodb';
import { Response } from 'express';
import { StatusCode, StatusMessage } from 'src/type/status-code.interface';

@Catch(MongoServerError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoServerError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let errors = {};
    const status = StatusCode.VALIDATION_ERROR;

    // Handle duplicate key error (E11000)
    if (exception.code === 11000) {
      errors = Object.entries(exception.keyValue).reduce(
        (acc, [key, value]) => {
          acc[key] = `${key} with value "${value}" already exists.`;
          return acc;
        },
        {},
      );
    } else {
      errors = { database: exception.message }; // General fallback for MongoDB errors
    }

    response.status(status).json({
      statusCode: status,
      status: false,
      message: StatusMessage.VALIDATION_ERROR,
      errors,
    });
  }
}
