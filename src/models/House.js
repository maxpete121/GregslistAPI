import { Schema } from "mongoose";


export const HouseSchema = new Schema({
    bedroom: {type: Number, required: true},
    bathroom: {type: Number, required: true},
    price: {type: Number, required: true},
    imgUrl: {type: String, required: true,},
    description: {type: String, maxLength: 150}
},{timestamps: true})