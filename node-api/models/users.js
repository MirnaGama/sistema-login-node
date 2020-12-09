export default (sequelize, DataType) => {
    const users = sequelize.define('Users', {
        id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataType.STRING, allowNull: false},
    })

    return users;
}