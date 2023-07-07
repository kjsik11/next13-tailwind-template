import getConnection from '../pg/connect-db';

import { ApiWrapper, OurHandler } from './api-builder';

export const pgHandler: ApiWrapper = (handler: OurHandler) => async (req, res) => {
  try {
    if (!req.pg) req.pg = getConnection();

    await handler(req, res);
  } finally {
    if (req.pg) await req.pg.end();
  }
};
