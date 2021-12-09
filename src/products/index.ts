import express from "express"
import { GetProductsResponse, IProduct } from "../interfaces"
import { ProductModel } from "./model"

const productsRouter = express.Router()

productsRouter
    .get('/', async (req, res) => {
        const products = await ProductModel.find({})

        const response: GetProductsResponse = { products } // use interface here to insure type safety of request/response
        res.send(response)
    })
    .get('/:id', async (req, res) => {
        const product = await ProductModel.findById(req.params.id)

        console.log(product)
        if (!product) {
            res.status(404).send()
        } else {
            res.send(product)
        }
    })
    .post("/", async (req, res) => {
        const product = new ProductModel(req.body)
        await product.save()
        res.status(201).send(product)
    })
    .put("/:id", async (req, res) => {
        const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!product) {
            res.status(404).send()
        } else {
            res.send(product)
        }
    })
    .delete("/:id", async (req, res) => {
        const product = await ProductModel.findByIdAndDelete(req.params.id)
        if (!product) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })

export default productsRouter