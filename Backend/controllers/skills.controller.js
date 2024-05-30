import { getSkillsDataService } from "../services/skills.service.js";

export const getSkillsData = async (req, res) => {
    try {
        const skills = await getSkillsDataService();
        res.json(skills);
    } catch (error) {
        res.status(404).send(`Not found. Something went wrong while trying to retrieve the data.`);
    }
}