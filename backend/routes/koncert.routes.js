import express from "express";
import protectRoute from "../middlerware/protectRoute.js";
import {
  createKoncert,
  deleteKoncert,
  getKoncerts,
} from "../controllers/koncert.controller.js";

const router = express.Router();

router.post("/", protectRoute, createKoncert);
router.get("/", getKoncerts);
router.get("/delete/:id", protectRoute, deleteKoncert);
export default router;
