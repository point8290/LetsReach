import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import config from "./config";
dotenv.config();

const connection = new Sequelize(config.development);

export default connection;
