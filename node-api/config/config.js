export default {
    database: 'users',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'users.sqlite',
        define: { underscore: true }
    },
    jwtSecret: 'MySecr0tK0y',
    jwtSession: {session: false}

}