import type { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

export const requiredHeaders = ['x-api-client', 'x-api-client-version'];

export default ({ headers = requiredHeaders, skip = false }: { skip?: boolean; headers?: string[] } = {}) =>
  (req: Request, _: Response, next: NextFunction) => {
    if (skip) {
      next();

      return;
    }

    for (const header of headers) {
      if (!req.headers[header]) {
        throw createError(400, `Missing ${header}`);
      }
    }

    next();
  };
