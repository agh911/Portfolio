import { getUserData, getSkillsData, getProjectsData } from "./dataService.js";

export const getUser = async () => {
    const data = await getUserData();
    if (data?.error) {
        return data.error.message;
    }
    return data;
};

export const getSkills = async () => {
    const data = await getSkillsData();
    if (data?.error) {
        return data.error.message;
    }
    return data;
};

export const getProjects = async () => {
    const data = await getProjectsData();
    if (data?.error) {
        return data.error.message;
    }
    return data;
};