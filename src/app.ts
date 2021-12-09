import express from "express";
import productsRouter from "./products/index";
import listEndpoints from 'express-list-endpoints';

const app = express();

app.use(express.json())

app.get('/test', (req, res) => {
    res.send({ message: "Test successful" });
})

app.use('/products', productsRouter)

console.table(listEndpoints(app));

export { app }