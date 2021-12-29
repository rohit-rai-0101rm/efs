import express from 'express'
const app=express();
app.use(express.json())
import productRoute from './routes/productRoute.js'
app.use("/api/v1/",productRoute)

export default app