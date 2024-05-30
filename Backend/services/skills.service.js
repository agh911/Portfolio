import Skill from "../models/skill.model.js";

export const getSkillsDataService = async () => {
    try {
        const skills = await Skill.find({});
        return skills;
    } catch (error) {
        console.error("Error in getSkillsDataService:", error);
        throw error;
    }
}