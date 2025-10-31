import express from "express";
const router = express.Router();
import Path from "../models/Path.js";
import Resource from "../models/Resource.js";


const findAllPaths = async (req, res) => {
 try {
    const paths = await Path.find();
    return res.status(200).send({ message: "todos los paths", paths });
  } catch (error) {
    return res.status(501).send({ message: "error al obtener los paths" });
  }
};

const findOnePath = async (req, res) => {
  const { id } = req.params;
  try {
    const path = await Path.findOne({ _id: id });
    return res.status(200).send({ message: "path encontrado", path });
  } catch (error) {
    return res.status(501).send({ message: "error al obtener los paths" });
  }
};

const getResourcesByPath = async (req, res) => {
  const { id } = req.params;

  try {
    const path = await Path.findOne({ _id: id });
    if (!path) return res.status(404).send({ message: "Path no encontrado" });

    const resources = await Resource.find({ path: path._id });

    return res.status(200).send({
      message: "Recursos del path",
      path,
      resources,
    });
  } catch (error) {
    return res.status(500).send({ message: "Error al obtener los recursos", error });
  }
};

//Endpoints
router.get("/", findAllPaths);
router.get("/:id", findOnePath);
router.get("/:id/resources", getResourcesByPath);

export default router;





