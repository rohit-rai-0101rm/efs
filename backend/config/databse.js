import mongoose from "mongoose";
export const databseConnection = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb connected to server ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
