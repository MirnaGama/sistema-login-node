const defaultResponse = (data, statusCode = 200) => ({data, statusCode})
const errorResponse = (message, statusCode = 400) => defaultResponse({error: message}, statusCode);

class UsersController {
    constructor(Users) {
        this.Users = Users
    }

    getAll() {
        return this.Users.findAll({}).then(result => defaultResponse(result))
        .catch(error => errorResponse(error.message));
    }

    getById(params) {
        return this.Users.findOne({where: params}).then(result => defaultResponse(result))
        .catch(error => errorResponse(error.message));
    }

    // userData = request body
    createUser(userData) {
        return this.Users.create(userData).then(result => defaultResponse(result, 201))
        .catch(error => errorResponse(error.message, 422));
    }

    updateUser(userData, params) {
        return this.Users.update(userData, {where: {id: params.id}}).then(result => defaultResponse(result))
        .catch(error => errorResponse(error.message, 422));
    }

    deleteUser(params) {
        return this.Users.destroy({where: params}).then(result => defaultResponse(result, 204))
        .catch(error => errorResponse(error.message, 422));
    }

}

export default UsersController;