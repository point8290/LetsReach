import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./routes/userRoute";
import * as dotenv from "dotenv";
import logger from "morgan";
import path from "path";
import http from "http";
import ErrorHandler from "./util/ErrorHandler";
import { auth, ConfigParams } from "express-openid-connect";
dotenv.config();

const app: Application = express();
const config: ConfigParams = {
  authRequired: false,
  auth0Logout: true,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  secret: process.env.SECRET,
};
if (
  !config.baseURL &&
  !process.env.BASE_URL &&
  process.env.PORT &&
  process.env.NODE_ENV !== "production"
) {
  config.baseURL = `http://localhost:${process.env.PORT}`;
}

app.use(auth(config));

// Middleware
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Hi user" : "Hi guest");
});

app.use("/api/user", userRoutes);

app.use(ErrorHandler);

const PORT = process.env.PORT || 4000;
http.createServer(app).listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
