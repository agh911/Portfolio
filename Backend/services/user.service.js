import User from "../models/user.schema.js";

export const getUserDataService = async () => {
    try {
        const user = await User.find({});
        return user;
    } catch (error) {
        console.error("Error in getUserDataService:", error);
        throw error;
    }
}