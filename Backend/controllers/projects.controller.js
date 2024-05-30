import { getProjectsDataService } from "../services/projects.service.js ";

export const getProjectsData = async (req, res) => {
    try {
        const projects = await getProjectsDataService();
        res.json(projects);
    } catch (error) {
        res.status(404).send(`Not found. Something went wrong while trying to retrieve the data.`);
    }
}