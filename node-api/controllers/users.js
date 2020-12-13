import httpStatus from 'http-status'

const defaultResponse = (data, statusCode = httpStatus.OK) => ({data, statusCode})
const errorResponse = (message, statusCode = httpStatus.BAD_REQUEST) => defaultResponse({error: message}, statusCode);

class UsersController {
    constructor(Users) {
        this.Users = Users
    }

    getAll() {
        return this.Users.findAll({}).then(result => defaultResponse(result))
        .catch(error => errorResponse(error.message));
    }

    getById(id) {
        console.log(id)
        return this.Users.findByPk(id).then(result => defaultResponse(result))
        .catch(error => errorResponse(error.message));
    }

    // userData = request body
    createUser(userData) {
        return this.Users.create(userData).then(result => defaultResponse(result, httpStatus.CREATED))
        .catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
    }

    updateUser(userData, params) {
        return this.Users.update(userData, {where: {id: params.id}}).then(result => defaultResponse(result))
        .catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
    }

    deleteUser(params) {
        return this.Users.destroy({where: params}).then(result => defaultResponse(result, httpStatus.NO_CONTENT))
        .catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
    }

}

export default UsersController;