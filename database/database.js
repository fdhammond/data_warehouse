const Sequelize = require('sequelize');

const UserModel = require('../models/users');
const RegionModel = require('../models/regions');
const CountryModel = require('../models/countries');
const CityModel = require('../models/cities');

const sequelize = new Sequelize('data_warehouse', 
'root', 'root', {    
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {        
         socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
     },
    timezone: '+02:00',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});

//VER VARIABLES DE ENTORNO ACA.

const User = UserModel(sequelize, Sequelize);
const Region = RegionModel(sequelize, Sequelize);
const Country = CountryModel(sequelize, Sequelize);
const City = CityModel(sequelize, Sequelize);



Region.hasMany(Country);
Country.belongsTo(Region);

Country.hasMany(City);
City.belongsTo(Country);


/*
User.hasMany(Order, { as: "userId", foreignKey: "user_id"});
Menu.hasMany(OrderDetail, { as: "menuId", foreignKey: "menu_id"});
Order.hasMany(OrderDetail, { as: "orderId", foreignKey: "order_id"});
*/

sequelize.sync({ force: false })
.then(() => {
    console.log('Sync Tables')
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });


module.exports = {
    User,
    Region,
    Country,
    City,
    sequelize    
}
