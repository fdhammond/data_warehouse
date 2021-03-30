module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('country', {
        id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
        },
        name: DataTypes.STRING,
        regionId: DataTypes.INTEGER    
    });
    /*
    Model.bulkCreate([{
        name: 'Argentina',
        regionId: 1
    },
    {
        name: 'Colombia',
        regionId: 1
        
    },
    {
        name: 'Chile',
        regionId: 1
        
    },
    {
        name: 'Uruguay',
        regionId: 1
              
    },
    {
        name: 'México',
        regionId: 2
        
    },
    {
        name: 'Estados Unidos',
        regionId: 2
        
    }
]);
*/
    return Model;
}