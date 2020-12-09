import app from './app';

app.listen(app.get('PORT'), () =>
	console.log(`Server running on: http://localhost:${app.get('PORT')}`)
)


