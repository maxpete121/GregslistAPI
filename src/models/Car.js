import { Schema } from "mongoose";





export const CarSchema = new Schema({
  // NOTE this is a bad way to build your schema
  // make: String,
  // model: String,
  // year: Number,
  // price: Number
  make: {type: String, maxLength: 25, required: true},
  model: {type: String, maxLength: 50, required: true},
  year: {type: Number, min: 1920, max: 2024, required: true},
  price: {type: Number, min: 0, required: true},
  description: {type: String, maxLength: 1000},
  imgUrl: {type: String, maxLength: 500, required: true, default: 'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  engineType: {type: String, required: true, default: 'unknown', enum: ['two cylinder', 'four cylinder', 'v6', 'v8', '2 stroke', 'chunko', 'unknown', 'other', 'electric⚡']}
})
