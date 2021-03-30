module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('region', {
        id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
        },
        name: DataTypes.STRING        
    });
/*
    Model.bulkCreate([{
        name: 'Sudamérica'
        
    },
    {
        name: 'Norteamérica'
        
    }    
]);
*/
    return Model;
}