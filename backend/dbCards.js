import mongoose from "mongoose"

const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
  description: String,
  interest: String,
  matches: Array,
  swipedRight: Array,
})

export default mongoose.model("cards", cardSchema)
