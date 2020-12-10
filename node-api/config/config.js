export default {
    database: 'users',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'users.sqlite',
        define: { underscore: true }
    },
    jwtSecret: 'SecrJwt',
    jwtSession: {session: false}

}