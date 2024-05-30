import express from "express";
import { getUserData } from "../controllers/user.controller.js";

const router = express.Router();

router.route('/').get(getUserData);

export { router as getUserDataRoute };