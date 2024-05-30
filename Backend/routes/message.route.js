import express from "express";
import { createMessageController } from "../controllers/message.controller.js";

const router = express.Router();

router.route('/messages').post(createMessageController);

export { router as createMessageRoute };