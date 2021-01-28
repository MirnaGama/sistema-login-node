import httpStatus from 'http-status'
import jwt from 'jwt-simple'

export default app => {
    const config = app.config;
    const users = app.datasource.models.Users;

    app.post('/token', (req, res) => {
        if (req.body.username && req.body.password) {
            const username = req.body.username;
            const password = req.body.password;

            users.findOne({where: {username}})
            .then(user => {
                if(users.isPassword(user.password, password)) {
                    const payload = { id: user.id };
                    res.json({token: jwt.encode(payload, config.jwtSecret), public_id: user.public_id})
                } else {
                    res.sendStatus(httpStatus.UNAUTHORIZED)
                }
            })
            .catch(() => res.sendStatus(httpStatus.UNAUTHORIZED))
        } else {
            res.sendStatus(httpStatus.UNAUTHORIZED)
        }
    })
}