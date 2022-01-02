import express from 'express'
import { errorMiddleware } from './middlewares/error.js';
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express();
import fileUplosd from 'express-fileupload'
import bodyParser from 'body-parser'
app.use(cors)
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
import orderRoute from './routes/orderRoute.js'
app.use("/api/v1",productRoute)
app.use("/api/v1",userRoute)
app.use("/api/v1",orderRoute)
app.use(errorMiddleware)

export default app