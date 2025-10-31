import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ["video", "artículo", "curso", "guía"], required: true },
  url: { type: String, required: true },
  description: { type: String },
  technology: { type: String }, 
  path: { type: mongoose.Schema.Types.ObjectId, ref: "Path" }
});

export default mongoose.model("Resource", resourceSchema);