const sequelize = require('../config/connection');
const { Traveller, Location, Trip } = require("../models");

const travellerSeedData = require("./travellerData.json");
const locationSeedData = require("./locationData.json");

const seedDatabase = async()=>{
    await sequelize.sync({force: true});

    const travellers  = await Traveller.bulkCreate(travellerSeedData);
    const locations = await Location.bulkCreate(locationSeedData);

    //create trips at random
    for(let i = 0; i < 10; i ++){
      const {id: randomTravellerId} = travellers[Math.floor(Math.random() * travellers.length)]
      const {id: randomLocationId} = locations[Math.floor(Math.random() * locations.length)]
      console.log(randomLocationId)
      await Trip.create({
        trip_budget: (Math.random() * 10000 + 1000).toFixed(2),
        traveller_amount: Math.floor(Math.random() * 10) + 1,
        traveller_id: randomTravellerId,
        location_id: randomLocationId
      })
    }

    const tr = await Traveller.findAll()
    console.log(tr);
    // If there's an error, such as the same random pairing of `traveller.id` and `location.id` occurring and we get a constraint error, don't quit the Node process
     
   process.exit(0)
}

seedDatabase();