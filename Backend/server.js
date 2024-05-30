// Backend Entry Point
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";

const app = express();

config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` });

const port = process.env.PORT || 3000;
const host = process.env.HOST;

//*Importing routes
import { getUserDataRoute } from "./routes/userData.route.js";
import { getProjectsDataRoute } from "./routes/projectsData.route.js";
import { getSkillsDataRoute } from "./routes/skillsData.route.js";

const databaseConnect = async () => {
    console.log("connecting to mongo...");
    await mongoose.connect(process.env.DB_URI);
    console.log(`connected to db: ${process.env.DB_URI}`);
};

databaseConnect().catch((err) => console.log(err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", getUserDataRoute);
app.use("/", getProjectsDataRoute);
app.use("/", getSkillsDataRoute);

const SERVER = app.listen(port, host, () => {
    console.log(`Server running on https://${host}:${port}`);
});

export default SERVER;
