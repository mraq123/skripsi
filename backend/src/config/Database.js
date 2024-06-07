import { Sequelize } from "sequelize";

const db = new Sequelize("smart_audio_db", "smart", "smart", {
  host: "localhost",
  dialect: "mysql",
});


export default db;
