import { ProductSchema } from "./schema";
import mongoose from "mongoose"
import { IProduct } from "../interfaces"

export const ProductModel = mongoose.model<IProduct>("products", ProductSchema);