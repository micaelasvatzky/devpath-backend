import express from "express";
const router = express.Router();
import Resource from "../models/Resource.js";

const findAllResources = async (req, res) => {
 try {
    const resources = await Resource.find();
    return res.status(200).send({ message: "todos los resources", resources });
  } catch (error) {
    return res.status(501).send({ message: "error al obtener los resources" });
  }
};

const findOneResource = async (req, res) => {
  const { id } = req.params;
  try {
    const resource = await Resource.findById(id).populate("step");
    if (!resource) return res.status(404).send({ message: "Recurso no encontrado" });

    return res.status(200).send({ message: "Recurso encontrado", resource });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error al obtener el recurso", error });
  }
};


//Endpoints
router.get("/", findAllResources);
router.get("/:id", findOneResource);

export default router;


