//const {Location, Traveller, Trip} = require("../models");

const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

console.log(typeof(Traveller))

Traveller.belongsToMany(Location, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'traveller_location'
})

module.exports = {
    Traveller,
    Location,
    Trip
}