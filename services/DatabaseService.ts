import { Sequelize } from 'sequelize'
import { getOption } from '../db/config'

export class DatabaseService {
	database: Sequelize

	init = async () => {
		try {
			this.database = new Sequelize(getOption(process.env.ENV))
			console.log('Connection has been established successfully.')
		} catch (error) {
			console.error('Unable to connect to the database:', error)
		}
	} 
}