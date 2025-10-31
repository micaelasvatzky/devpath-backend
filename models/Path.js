import mongoose from "mongoose";

const pathSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  description: { type: String, required: true },
  steps: [
    {
      title: { type: String, required: true }, 
      description: { type: String },
      order: { type: Number }, 
    }
  ]
});

export default mongoose.model("Path", pathSchema);