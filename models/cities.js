module.exports = (sequelize, DataTypes) => {
    const Model =  sequelize.define('city', {
        id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
        },
        name: DataTypes.STRING         
    });

    Model.bulkCreate([{
        name: 'Buenos Aires',
        countryId: 1
    },
    {
        name: 'Cordoba',
        countryId: 1
        
    },
    {
        name: 'Bogotá',
        countryId: 2
        
    },
    {
        name: 'Cúcuta',
        countryId: 2
        
    },    
    {
        name: 'Medellín',
        countryId: 2
        
    },
    {
        name: 'Atacama',
        countryId: 3
        
    },
    {
        name: 'Santiago',
        countryId: 3
        
    },
    {
        name: 'Valparaíso',
        countryId: 3
        
    },
    {
        name: 'Canelones',
        countryId: 4
        
    },
    {
        name: 'Maldonado',
        countryId: 4
    
    },
    {
        name: 'Montevideo',
        countryId: 4
        
    },
    {
        name: 'Ciudad de México',
        countryId: 5
        
    },
    {
        name: 'Tijuana',
        countryId: 5
        
    },
    {
        name: 'Florida',
        countryId: 6
        
    },
    {
        name: 'Texas',
        countryId: 6
        
    }
]);

    return Model;
}