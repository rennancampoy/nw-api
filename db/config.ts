import 'dotenv/config'
import { SequelizeOptions } from 'sequelize-typescript'
import { Dialect } from 'sequelize/types'

export const getSequelizeOption = (prefix: string): SequelizeOptions => {
  return {
    database: process.env[`${prefix}_PG_DB_DATABASE`],
    host: process.env[`${prefix}_PG_DB_HOST`],
    port: parseInt(process.env[`${prefix}_PG_DB_PORT`] || '1331'),
    username: process.env[`${prefix}_PG_DB_USER`],
    password: process.env[`${prefix}_PG_DB_PASSWORD`],
    dialect: process.env[`${prefix}_PG_DB_DIALECT`] as Dialect,
    logging: process.env[`${prefix}_PG_DB_LOGGING`] === 'true'
      ? console.log
      : false,
  }
}

export const getMongooseOption = (prefix: string) => {
  return {
    host: process.env[`${prefix}_MONGO_DB_HOST`],
    username: process.env[`${prefix}_MONGO_DB_USER`],
    password: process.env[`${prefix}_MONGO_DB_PASSWORD`],
    url: process.env[`${prefix}_MONGO_DB_URL `],
  }
}

export const development = getSequelizeOption('DEV')