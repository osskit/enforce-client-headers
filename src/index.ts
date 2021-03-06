import type { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

export const defaultHeaders = ['x-api-client', 'x-api-client-version'] as const;

export const enforceClientHeaders = ({ headers = defaultHeaders }: { headers?: readonly string[] } = {}) =>
  (req: Request, _: Response, next: NextFunction) => {
    for (const header of headers) {
      if (!req.headers[header]) {
        throw createError(400, `Missing ${header}`);
      }
    }

    next();
  };
