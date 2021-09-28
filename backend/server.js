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
  // update userId's doc.swipedRight with matchedUserId
  const { userId, matchedUserId } = req.params

  function updateUserArray(userIdToUpdate, userIdToInsert, arr) {
    return new Promise((resolve, reject) => {
      Cards.findOne({ _id: userIdToUpdate }, {}, (err, user) => {
        Cards.updateOne(
          { _id: userIdToUpdate },
          {
            [arr]: Array.from(
              new Set([...user[arr], userIdToInsert].filter((i) => i !== ""))
            ),
          },
          (err, data) => {
            if (err) {
              console.log(err)
              reject(err)
            }
            resolve(data)
          }
        )
      })
    })
  }
  const currentUserPromise = updateUserArray(
    userId,
    matchedUserId,
    "swipedRight"
  )
  const matchedUserPromise = updateUserArray(matchedUserId, userId, "matches")

  Promise.all([matchedUserPromise, currentUserPromise]).then((values) => {
    res.send("ok")
  })
})

app.put("/playr/cards", async (req, res) => {
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

function createUserPromisesForArray(arr) {
  let retval = []
  for (let userId of arr) {
    retval.push(
      getUserPromiseForIdAndNameById(userId, "createUserPromisesForArray")
    )
  }
  return retval
}
function getUserPromiseForIdAndNameById(id, caller) {
  return new Promise((resolve, reject) =>
    Cards.findOne({ _id: id }, {}, (err, user) => {
      if (err) {
        reject(err)
      }
      resolve({ id, name: user.name, imgUrl: user.imgUrl })
    })
  )
}
app.get("/playr/:id", async (req, res) => {
  const { id } = req.params
  Cards.findOne({ id: id }, {}, (err, user) => {
    const matchPromises = createUserPromisesForArray(user.matches)
    const swipePromises = createUserPromisesForArray(user.swipedRight)

    if (err) {
      res.status(500).send(err)
    }
    Promise.all([...matchPromises, ...swipePromises]).then((data) => {
      const matches = []
      const swipedRight = []
      for (let i = 0; i < data.length; i++) {
        if (i < matches.length) {
          matches.push(data[i])
        } else {
          swipedRight.push(data[i])
        }
      }
      res.send({ ...user, matches, swipedRight })
    })
  })
})

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))
