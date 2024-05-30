import { getUserDataService } from "../services/user.service.js";

export const getUserData = async (req, res) => {
    try {
        const user = await getUserDataService();
        res.json(user);
    } catch (error) {
        res.status(404).send(`Not found. Something went wrong while trying to retrieve the data.`);
    }
}