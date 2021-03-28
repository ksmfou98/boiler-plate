const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://ksmfou98:dlehgus98-@bolierplate.4jsmk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected.... "))
  .catch((err) => console.log(err));

const handleListening = () => {
  console.log(`Listening on: http://localhost:${port}`);
};

app.get("/", (req, res) => res.send("hello World"));

app.listen(port, handleListening);
