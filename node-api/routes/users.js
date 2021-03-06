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

// checking if username already exists 
app.route('/username/:username')
.get((req,res) => {

    userController.isUsernameExists(req.params.username).then((response => {
        res.status(response.statusCode)
        res.json(response.data)
    }))
})

// get user data by public id
app.route('/users/id/:public_id').all(app.auth.authenticate())
.get((req,res) => {

    userController.getByPublicId(req.params.public_id)
    .then(response => {
        res.status(response.statusCode)
        res.json(response.data)
    })

})

}