import Project from "../models/project.model.js";

export const getProjectsDataService = async () => {
    try {
        const projects = await Project.find({});
        return projects;
    } catch (error) {
        console.error("Error in getProjectDataService:", error);
        throw error;
    }
}