import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";

// App Config
const app = express();
const port = process.env.PORT || 8001;

const connection_url = `mongodb+srv://admin:xzvCOUMA12fH9df3@cluster0.nzh5r.mongodb.net/playrdb?retryWrites=true&w=majority`;

//Middleware

//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("success"));
app.post("/playr/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/playr/cards"),
  (req, res) => {
    Cards.create(dbCard, (err, data));
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  };

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port})`));
