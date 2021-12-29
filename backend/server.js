import app from  './app.js'
import dotenv from 'dotenv'
import { databseConnection } from './config/databse.js';

dotenv.config({path:"backend/config/config.env"})
databseConnection();
app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})
