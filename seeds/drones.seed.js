// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

  require('../db/index.js');
  const Drone = require('../models/Drone.model.js')

  const seedDB = async () => {
    const nbDrones = await Drone.insertMany(drones)/// renvoie les items push
    console.log(nbDrones.length," drones have been created")
  }

  seedDB()
