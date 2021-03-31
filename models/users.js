module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('user', {
        id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING(999),
        isAdmin: {
            type: DataTypes.ENUM('admin', 'user'),
            defaultValue: 'user'
        }
    });
/*
    Model.bulkCreate([{
        email: 'acamica@gmail.com',
        password: '12345678'
    }]);
*/
    return Model;
}