// Iteration #1
const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: { type: String, unique: true },
    propellers: Number,
    maxSpeed: Number,
  })
  
  const Drone = model('Drone', schema)
  
  module.exports = Drone