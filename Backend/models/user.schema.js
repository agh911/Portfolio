import mongoose from "mongoose";
import Project from "./project.model.js";
import Skill from "./skill.model.js";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    about: { type: [String], required: true },
    location: { type: String },
    email: { type: String },
    github: { type: String },
    linkedin: { type: String },
    // projects: [{ type: mongoose.Schema.Types.ObjectId, ref: Project }],
    // technicalSkills: [{ type: mongoose.Schema.Types.ObjectId, ref: Skill }]
});

const User = mongoose.model('User', userSchema);

export default User;