import { Schema } from "mongoose";





export const JobSchema = new Schema({
    wage: {type: Number, required: true},
    hours: {type: String, required: true, enum: ['Full Time', 'Part Time']},
    employer: {type: String, required: true, maxLength: 30},
    description: {type: String, required: false, default: 'No description', maxLength: 200}
}, {timestamps: true})