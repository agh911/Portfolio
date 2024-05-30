import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projects: [
        {
            title: { type: String, required: true },
            image: { type: String, required: true },
            description: { type: String, required: true },
            technologies: [{
                type: String, required: true
            }],
            githubUrl: {
                type: String,
                required: true
            },
            demoUrl: {
                type: String,
                required: true
            }
        }
    ]
});


const Project = mongoose.model('Project', projectSchema);

export default Project;