import express from 'express';
import config from './config/config';
import datasource from './config/datasource';
import bodyParser from 'body-parser';

const app = express();

app.config = config;
app.datasource = datasource(app);
app.set('PORT', 7000);

app.use(bodyParser.json());

const Users = app.datasource.models.Users;

var cors = require('cors')
const corsOpts = {
	origin: '*',

	methods: ['GET', 'POST'],

	allowedHeaders: ['Content-Type'],
}

app.use(cors(corsOpts)) // TRATANDO CORS EXCEPTION

// TESTANDO ...
app.route('/users')
.get((req,res) => {
	Users.findAll({}).then(result => res.json(result))
	.catch(err => res.status(412))
})
.post((req, res) => { // CREATE NEW USER
	Users.create(req.body)
	.then(result => res.json(result))
	.catch(err => res.status(412))
})

app.route('/users/:id')
.get((req,res) => { // FIND BY ID
	Users.findOne({where: req.params}).then(result => res.json(result))
	.catch(err => res.status(412))
})
.put((req, res) => { // UPDATE USER
	Users.update({where: req.params})
	.then(result => res.json(result))
	.catch(err => res.status(412))
})
.delete((req, res) => { // DELETE USER
	Users.delete({where: req.params})
	.then(result => res.status(204)) // SUCCESS STATUS
	.catch(err => res.status(412))
})

export default app;