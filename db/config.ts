import 'dotenv/config'
import { SequelizeOptions } from 'sequelize-typescript'
import { Dialect } from 'sequelize/types'

export const getOption = (prefix: string): SequelizeOptions => {
  return {
    database: process.env[`${prefix}_DB_DATABASE`],
    host: process.env[`${prefix}_DB_HOST`],
    port: parseInt(process.env[`${prefix}_DB_PORT`] || '1331'),
    username: process.env[`${prefix}_DB_USER`],
    password: process.env[`${prefix}_DB_PASSWORD`],
    dialect: process.env[`${prefix}_DB_DIALECT`] as Dialect,
    logging: process.env[`${prefix}_DB_LOGGING`] === 'true'
      ? console.log
      : false,
  }
}

export const development = getOption('DEV')