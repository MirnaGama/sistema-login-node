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

app.route('/users/:id')
.get((req,res) => { // FIND BY ID

    userController.getById(req.params)
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

}