import { NextFunction, Request, Response } from "express";
import { User } from "../models/index";

export async function createUser(req: Request, res: Response) {
  try {
    const { email, firstName, lastName, phone } = req.body;
    const user = await User.create({
      email,
      firstName,
      lastName,
      phone,
    });
    console.log("User created:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}
