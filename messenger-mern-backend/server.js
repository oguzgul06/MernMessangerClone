import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
import cors from "cors";

//db config
const mongoURI =
  "mongodb+srv://admin:CyJEndAnxbHwJYvU@cluster0.ewhof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoURI, {
  useCareateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DB CONNECTED");
});

//app config
const app = express();
const port = process.env.PORT || 9000;

//api routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

// listener
app.listen(port, () => console.log(`listening on localhost:${port}`));
