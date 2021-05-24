import { Sequelize } from 'sequelize-typescript'
import { DestroyOptions } from 'sequelize'
import { getOption } from '../db/config'
import { Message } from '../db/models/Message'
import { truncate } from 'fs'

export class DatabaseService {
	private database: Sequelize

	init = async () => {
		try {
			this.database = new Sequelize(getOption(process.env.ENV))
			
			await this.database.authenticate()

			await this.database.sync({force: true})

			this.database.addModels([Message])
		} catch (error) {
			console.error('Unable to connect to the database:', error)
		}
	} 
}