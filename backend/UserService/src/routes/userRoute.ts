import express from "express";
import { checkJwt } from "../config/auth";

const router = express.Router();

router.get("/protected", (req, res) => {
  if (!req.oidc.isAuthenticated()) {
    return res.redirect("/login");
  }
  res.send("Welcome to the protected page!");
});

router.get("/login", (req, res) => {
  res.oidc.login();
});

router.get("/logout", (req, res) => {
  res.oidc.logout();
});

export default router;
