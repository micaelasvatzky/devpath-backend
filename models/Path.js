import mongoose from "mongoose";

const pathSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  description: { type: String, required: true },
  steps: [{ type: mongoose.Schema.Types.ObjectId, ref: "Step" }]
});

export default mongoose.model("Path", pathSchema);