export const PGSQL_HOST = process.env.PGSQL_HOST;
export const PGSQL_PORT = process.env.PGSQL_PORT;
export const PGSQL_DATABASE = process.env.PGSQL_DATABASE;
export const PGSQL_USER = process.env.PGSQL_USER;
export const PGSQL_PASSWORD = process.env.PGSQL_PASSWORD;

export const TEST = process.env.TEST;

export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const isTest = process.env.NODE_ENV === 'test';
