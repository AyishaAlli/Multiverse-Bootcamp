const {Sequelize, DataTypes, Model} = require('sequelize'); // Imports sequelize 

const sequelize = new Sequelize('database', 'username', 'password', { // create new instance of sequelize 
    dialect: 'sqlite', // using sqlite to convert the data into tables 
    storage: './restaurants-seq.sqlite' // where the data will be stored
});

 module.exports={sequelize, DataTypes, Model}; // eports 