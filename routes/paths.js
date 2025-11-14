import express from "express";
const router = express.Router();

import Path from "../models/Path.js";

const findAllPaths = async (req, res) => {
  try {
    const paths = await Path.find()
      .populate({
        path: "steps",
        options: { sort: { order: 1 } }, 
        populate: "resources"
      })
      .lean();

    return res.status(200).send({
      message: "All paths with their steps",
      paths,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Error fetching paths with steps", error });
  }
};


const findSinglePath = async (req, res) => {
  const { pathId } = req.params;

  try {
    const path = await Path.findById(pathId)
      .populate({
        path: "steps",
        options: { sort: { order: 1 } },
        populate: { path: "resources" }, 
      })
      .lean();

    if (!path) return res.status(404).send({ message: "Path not found" });

    return res.status(200).send({
      message: "Path with steps and resources",
      path,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Error fetching path with steps", error });
  }
};

// Endpoints
router.get("/", findAllPaths);
router.get("/:pathId", findSinglePath);

export default router;
