import express from 'express'
import { errorMiddleware } from './middlewares/error.js';
const app = express();


app.use(express.json())

import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
app.use("/api/v1",productRoute)
app.use("/api/v1",userRoute)

app.use(errorMiddleware)

export default app