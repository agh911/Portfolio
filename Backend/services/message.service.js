import Message from "../models/message.model.js";

export const createMessage = async (name, email, subject, content) => {
    try {
        const newMessage = new Message({
            name,
            email,
            subject,
            content,
        });

        await newMessage.save();
        return newMessage;

    } catch (error) {
        throw error;
    }
};
