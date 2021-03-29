module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING(150),
        isAdmin: {
            type: DataTypes.ENUM('admin', 'user'),
            defaultValue: 'user'
        }
    });
}