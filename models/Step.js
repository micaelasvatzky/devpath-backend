import mongoose from "mongoose";

const stepSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number },
  resources: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resource" }]
});

export default mongoose.model("Step", stepSchema);
