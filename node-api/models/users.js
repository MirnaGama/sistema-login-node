import bcrypt from 'bcrypt';

export default (sequelize, DataType) => {
    const users = sequelize.define('Users', {
        id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
        public_id: {type: DataType.STRING},
        name: {type: DataType.STRING, allowNull: false},
        username: {type: DataType.STRING, allowNull: false, unique: true},
        password: {type: DataType.STRING, allowNull: false}
    },
    { hooks: {
        beforeCreate: user => {
            const salt = bcrypt.genSaltSync();
            user.set('password', bcrypt.hashSync(user.password, salt)); // ENCRYPT PASSWORD 
            user.set('public_id', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)); // hash to public id
        }
    },
})
     // COMPARING HASH FOR PASSWORD
    users.isPassword = (encodedPassword, password) => bcrypt.compareSync(password, encodedPassword);
    
    return users;
}