import { Sequelize } from 'sequelize-typescript'
import { getSequelizeOption } from '../db/config'
import { Message } from '../db/models/Message'

export class DatabaseService {
	private sequelize: Sequelize

	private initSequelize = async () => {
		try {
			this.sequelize = new Sequelize(getSequelizeOption(process.env.ENV))	
			await this.sequelize.authenticate()
			this.sequelize.addModels([Message])
			await this.sequelize.sync()
		} catch (error) {
			console.error('Unable to connect to the database:', error)
		}
	}

	private initMongoose = async () => {
	}

	init = async () => {
		this.initSequelize()
		this.initMongoose()
	} 
}