import { Request, Response, NextFunction } from "express";

export const checkRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.auth; // Auth0 adds the user object here
    if (!user || !roles.some((role) => user.roles?.includes(role))) {
      return res.status(403).send("Forbidden");
    }
    next();
  };
};
