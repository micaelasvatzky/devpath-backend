import express from "express";
import User from "../models/User.js";
 
const router = express.Router();
 

router.post("/", async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = new User({ username, email });
    await user.save();
    return res.status(201).send({ message: "Usuario creado", user});
  } catch (error) {
    return res.status(500).send({ message: "Hubo un error", error });
  }
});
 

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send({ message: "Todos los usuarios", users });
  } catch (error) {
    return res.status(500).send({ message: "Hubo un error", error });
  }
});


export default router;