import express from "express";
import cors from "cors";
import session from "express-session";
import UserRoute from "./routes/UserRoute.js";
import AudioRoute from "./routes/AudioRoute.js";
import ScheduleRoute from "./routes/ScheduleRoute.js";
import db from "./config/Database.js";
import AuthRoute from "./routes/AuthRoute.js";
import SequelizeStore from "connect-session-sequelize";
import TtsRoute from "./routes/TtsRoute.js";

// Hapus dotenv.config() karena kita tidak menggunakan .env lagi

const app = express();

// Pindahkan nilai variabel env ke dalam kode
const APP_PORT = 5000;
const SESS_SECRET = "ksjdksjssk1k2j1kjlid28ldj2kjd2dklsjklie3";

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

app.use(
  session({
    secret: SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    // HTTP / HTTPS
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use(UserRoute);
app.use(AudioRoute);
app.use(ScheduleRoute);
app.use(AuthRoute);
app.use(TtsRoute);

// store.sync();

app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});
