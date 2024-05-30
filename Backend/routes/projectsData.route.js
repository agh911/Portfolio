import express from "express";
import { getProjectsData } from "../controllers/projects.controller.js";

const router = express.Router();

router.route('/getProjects').get(getProjectsData);

export { router as getProjectsDataRoute };