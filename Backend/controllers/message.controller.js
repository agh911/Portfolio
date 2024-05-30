import { createMessage } from "../services/message.service.js";

export const createMessageController = async (req, res) => {
    try {
        const { name, email, subject, content } = req.body;

        const message = await createMessage(name, email, subject, content);

        res.status(201).json({ success: true, message });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
