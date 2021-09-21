import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
  description: String,
  interest: String,
});

export default mongoose.model("cards", cardSchema);
