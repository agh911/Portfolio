import axios from "axios";

// const API_BASE_URL = "http://localhost:3000";
const API_BASE_URL = import.meta.env.VITE_PORTFOLIO_URL;

export const getUserData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const getProjectsData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getProjects`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const getSkillsData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getSkills`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const createMessage = async ({ name, email, subject, content }) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/messages`, { name, email, subject, content });
        return response.data;
    } catch (error) {
        throw error;
    }
};