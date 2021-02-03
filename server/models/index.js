import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env

const MONGO_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cstoreserver.u8r0r.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

module.exports = () => {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected")
    })
    .catch((err) => {
      console.log(err)
    })
}
