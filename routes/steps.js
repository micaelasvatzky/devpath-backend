import express from "express";
const router = express.Router();

import Step from "../models/Step.js";

const getAllSteps = async (req, res) => {
  try {
    const steps = await Step.find()
      .sort({ order: 1 })
      .populate("resources"); 

    return res.status(200).send({
      message: "All steps with their resources",
      steps,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error fetching all steps", error });
  }
};

const getStepById = async (req, res) => {
  const { stepId } = req.params;

  try {
    const step = await Step.findById(stepId).populate("resources");
    if (!step) return res.status(404).send({ message: "Step not found" });

    return res.status(200).send({
      message: "Step with its resources",
      step,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error fetching step", error });
  }
};

// Endpoints
router.get("/", getAllSteps);
router.get("/:stepId", getStepById);

export default router;
