import express from 'express'
import { errorMiddleware } from './middlewares/error.js';
import cookieParser from 'cookie-parser'
const app = express();


app.use(express.json())
app.use(cookieParser())
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
import orderRoute from './routes/orderRoute.js'
app.use("/api/v1",productRoute)
app.use("/api/v1",userRoute)
app.use("/api/v1",orderRoute)
app.use(errorMiddleware)

export default app