import express from "express"
import mongoose from "mongoose"
import Cards from "./dbCards.js"
import Cors from "cors"

// App Config
const app = express()
const port = process.env.PORT || 8001

const connection_url = `mongodb+srv://admin:xzvCOUMA12fH9df3@cluster0.nzh5r.mongodb.net/playrdb?retryWrites=true&w=majority`

//Middleware
app.use(express.json())
app.use(Cors())
//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//API Endpoints
app.get("/", (req, res) => res.status(200).send("success"))

app.post("/playr/cards", (req, res) => {
  const dbCard = req.body

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.get("/playr/cards", async (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.get("/playr/cards/:userId/:matchedUserId", async (req, res) => {
  console.log(req.params.userId)
  console.log(req.params.matchedUserId)
  // update userId's doc.swipedRight with matchedUserId
  const { userId, matchedUserId } = req.params
  const userPromise = new Promise((resolve, reject) =>
    Cards.findOne({ _id: userId }, {}, (err, user) => {
      const swipedRight = Array.from(
        new Set([...user.swipedRight, matchedUserId])
      )
      Cards.updateOne(
        { _id: userId },
        { swipedRight },
        // { swipedRight: [] },
        (err, data) => {
          if (err) {
            console.log(err)
            reject(err)
          } else {
            console.log(data)
            resolve(data)
          }
        }
      )
    })
  )
  const matchedUserPromise = new Promise((resolve, reject) =>
    Cards.findOne({ _id: matchedUserId }, {}, (err, user) => {
      const matches = Array.from(new Set([...user.matches, userId]))
      Cards.updateOne({ _id: matchedUserId }, { matches }, (err, data) => {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          console.log(data)
          resolve(data)
        }
      })
    })
  )

  Promise.all([userPromise, matchedUserPromise]).then((values) => {
    res.send("hello")
  })
})

app.put("/playr/cards", async (req, res) => {
  console.log(req.body)
  Cards.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (err, data) => {
      if (err) return res.status(500).send(err)
      return res.send(data)
    }
  )
})

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))
