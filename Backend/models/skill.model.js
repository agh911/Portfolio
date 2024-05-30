import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    technicalSkills: [
        {
            category: { type: String, required: true },
            skills: [
                {
                    name: { type: String, required: true },
                    logoUrl: { type: String }
                }
            ]
        }
    ]
});

const Skill = mongoose.model('Skill', skillSchema);

export default Skill