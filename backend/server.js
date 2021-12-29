import app from './app.js'

import dotenv from 'dotenv'
import  {databaseConnection}  from './config/database.js';


dotenv.config({path:"backend/config/config.env"})
databaseConnection();
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });
dotenv.config({ path: "backend/config/config.env"})
const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);

})

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  })
  process.on("unhandledRejection",err=>{
      console.log(`Error:${err.message}`)
      console.log("shutting down the server due to unhandled promise rejection")
      server.close(()=>{
          process.exit(1)
      })
    })
  