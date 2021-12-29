import express from 'express'
import { errorMiddleware } from './middlewares/error.js';
const app = express();


app.use(express.json())

import products from './routes/productRoute.js'

app.use("/api/v1",products)


app.use(errorMiddleware)

export default app