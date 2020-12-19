import UsersController from '../controllers/users';

// USERS ROUTES
export default (app) => {

const userController = new UsersController(app.datasource.models.Users);

app.route('/users')
.get((req,res) => {

    userController.getAll()
    .then(response => {
        res.status(response.statusCode)
        res.json(response.data)
    })

})
.post((req, res) => { // CREATE NEW USER

	userController.createUser(req.body)
    .then(response => {
        res.status(response.statusCode)
        res.json(response.data)
    })

})

// SET Authorization = bearer ${token} ON HEADER WHEN REQUEST THE ENDPOINT
app.route('/users/:id').all(app.auth.authenticate())
.get((req,res) => { // FIND BY ID

    userController.getById(req.params.id)
    .then(response => {
        res.status(response.statusCode)
        res.json(response.data)
    })

})
.put((req, res) => { // UPDATE USER

    userController.updateUser(req.body, req.params)
    .then(response => {
        res.status(response.statusCode)
        res.json(response.data)
    })
	
})
.delete((req, res) => { // DELETE USER
    
    userController.deleteUser(req.params).then(response => {
        res.status(response.statusCode)
    })

})


app.route('/users/username/:username').all(app.auth.authenticate())
.get((req,res) => {

    userController.getByUsername(req.params.username)
    .then(response => {
        res.status(response.statusCode)
        res.json(response.data)
    })

})

}