import express from 'express';
import config from './config/config';
import datasource from './config/datasource';
import bodyParser from 'body-parser';
import authorization from './config/auth';
import usersRouter from './routes/users';
import authRouter from './routes/auth';

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

// AUTH ---- JWT 
const auth = authorization(app);
app.use(auth.initialize())
app.auth = auth;

usersRouter(app); // BINDING THE ROUTERS FOR USERS
authRouter(app); // AUTH ROUTER

export default app;