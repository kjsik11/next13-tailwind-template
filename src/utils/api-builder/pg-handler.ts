import getConnection from '../pg/connect-db';

import { ApiWrapper, OurHandler } from './api-builder';

// TODO: Preparing typescript v5.2.0
// const getPG = async () => {
//   const connection = await getConnection();

//   return {
//     connection,
//     [Symbol.asyncDispose]: async () => {
//       await connection.end();
//     },
//   };
// };

export const pgHandler: ApiWrapper = (handler: OurHandler) => async (req, res) => {
  if (!req.pg) {
    // await using { connection } = getPG()
    // req.pg = connection

    req.pg = await getConnection();
  }

  await handler(req, res);
};
