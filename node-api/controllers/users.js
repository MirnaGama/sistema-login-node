import httpStatus from 'http-status'

const defaultResponse = (data, statusCode = httpStatus.OK) => ({data, statusCode})
const errorResponse = (message, statusCode = httpStatus.BAD_REQUEST) => defaultResponse({error: message}, statusCode);

class UsersController {
    constructor(Users) {
        this.Users = Users
    }

    getAll() {
        return this.Users.findAll({attributes: ['public_id', 'name']}).then(result => defaultResponse(result))
        .catch(error => errorResponse(error.message));
    }

    getByPublicId(id) {
        return this.Users.findAll(
            {atributes: ['name', 'username'], 
            where: {public_id: id}})
            .then(result => defaultResponse(result))
        .catch(error => errorResponse(error.message));
    }

    getByUsername(username) {
        return this.Users.findAll({
            attributes: ['name', 'username'],
            where: {username: username}
          }).then(result => defaultResponse(result))
          .catch(error => errorResponse(error.message));
    }

    // checking if the username already exists
    isUsernameExists(username) {
        return this.Users.count({ where: {'username': username }}).then(count => 
            defaultResponse(count != 0)); 
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