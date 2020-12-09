import express from 'express';
import config from './config/config';
import datasource from './config/datasource';
import bodyParser from 'body-parser';
import usersRouter from './routes/users';

const app = express();

app.config = config;
app.datasource = datasource(app);
app.set('PORT', 7000);

app.use(bodyParser.json());

var cors = require('cors')
const corsOpts = {
	origin: '*',

	methods: ['GET', 'POST'],

	allowedHeaders: ['Content-Type'],
}

app.use(cors(corsOpts)) // FIXING CORS

usersRouter(app); // BINDING THE ROUTERS FOR USERS

export default app;