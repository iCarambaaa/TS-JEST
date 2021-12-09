import mongoose from "mongoose"
import { IProduct } from "../interfaces"

export const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
}, { timestamps: true })
