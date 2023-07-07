import { isProd } from '../env';
import { ERRORS } from '../error';

import type { Client, QueryResult } from 'pg';

export default async function queryRunner(client: Client, query: string) {
  let result: QueryResult | null = null;

  try {
    result = await client.query(query);
  } catch (error) {
    if (!isProd) console.log('[QUERY ERROR]: ', error);
    throw ERRORS['INTERNAL_SERVER_ERROR'];
  }
  return result;
}
