import bcrypt from 'bcrypt';

export default (sequelize, DataType) => {
    const users = sequelize.define('Users', {
        id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataType.STRING, allowNull: false},
        username: {type: DataType.STRING, allowNull: false},
        password: {type: DataType.STRING, allowNull: false}
    },
    { hooks: {
        beforeCreate: user => {
            const salt = bcrypt.genSaltSync();
            user.set('password', bcrypt.hashSync(user.password, salt)); // ENCRYPT PASSWORD 
        }
    },
})
     // COMPARING HASH FOR PASSWORD
    users.isPassword = (encodedPassword, password) => Bcrypt.compareSync(password, encodedPassword);
    
    return users;
}