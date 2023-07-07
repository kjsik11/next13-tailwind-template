import { Client } from 'pg';

import { PGSQL_DATABASE, PGSQL_HOST, PGSQL_PASSWORD, PGSQL_PORT, PGSQL_USER } from '../env';
import { ERRORS } from '../error';

export default async function getConnection() {
  if (!PGSQL_USER || !PGSQL_PASSWORD || !PGSQL_HOST || !PGSQL_PORT || !PGSQL_DATABASE)
    throw ERRORS['INTERNAL_SERVER_ERROR'];

  const client = new Client({
    user: PGSQL_USER,
    password: PGSQL_PASSWORD,
    host: PGSQL_HOST,
    port: Number(PGSQL_PORT),
    database: PGSQL_DATABASE,
  });

  await client.connect();
  return client;
}
