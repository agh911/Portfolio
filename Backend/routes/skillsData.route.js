import express from "express";
import { getSkillsData } from "../controllers/skills.controller.js";

const router = express.Router();

router.route('/getSkills').get(getSkillsData);

export { router as getSkillsDataRoute };