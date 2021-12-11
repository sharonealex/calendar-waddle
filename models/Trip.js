/* eslint-disable linebreak-style */
const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

//create trip model
class Trip extends Model {};

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    trip_budget: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false    
    },
    traveller_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "traveller",
        key: "id",
        unique: false
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
        unique: false    
      }    
    }  
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName:"trip"
  }
);


module.exports = Trip;