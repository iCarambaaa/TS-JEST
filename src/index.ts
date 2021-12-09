import { app } from './app'
import mongoose from "mongoose"

const port = process.env.PORT || 3030;

console.log(process.env.MONGO_URL_TEST)

mongoose.connect(process.env.MONGO_URL_TEST!)
    .then(() => {
        console.log(`Connected to Mongo`);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    })
