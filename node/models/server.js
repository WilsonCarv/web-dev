const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
require('dotenv').config();

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.paths = {
			users: '/api/users'
		};
		this.dbConnection();
		this.middlewares();
		this.routes();
	}
	routes() {
		this.app.use(this.paths.users, require('../routes/user.routes'));
	}
	listen() {
		this.app.listen(this.port, () => {
			console.log('Server running on port', this.port);
		});
	}
	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
	}
	async dbConnection() {
		await dbConnection();
	}
}
module.exports = {
	Server
};
