import type { Request, Response, NextFunction } from 'express';

export default (nodeEnv: string) => (req: Request, res: Response, next: NextFunction) => {
  if (nodeEnv !== 'production') {
    next();

    return;
  }
  if (!req.headers['x-api-client']) {
    res.status(400).send('Missing x-api-client');

    return;
  }
  if (!req.headers['x-api-client-version']) {
    res.status(400).send('Missing x-api-client-version');

    return;
  }
  next();
};
