import type { Express, Request } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { eq } from "drizzle-orm";
import { tasks } from "@shared/schema";

declare module "express-session" {
  interface SessionData {
    userId: number;
  }
}

export function registerRoutes(app: Express): Server {
  setupAuth(app);

  // Tasks CRUD
  app.get("/api/tasks", async (req, res) => {
    if (!req.user) return res.sendStatus(401);
    const userTasks = await storage.getTasks(req.user.id);
    res.json(userTasks);
  });

  app.post("/api/tasks", async (req, res) => {
    if (!req.user) return res.sendStatus(401);
    const task = await storage.createTask({
      ...req.body,
      userId: req.user.id,
    });
    res.status(201).json(task);
  });

  app.patch("/api/tasks/:id", async (req, res) => {
    if (!req.user) return res.sendStatus(401);
    const task = await storage.updateTask(parseInt(req.params.id), req.body);
    if (!task) return res.sendStatus(404);
    res.json(task);
  });

  app.delete("/api/tasks/:id", async (req, res) => {
    if (!req.user) return res.sendStatus(401);
    await storage.deleteTask(parseInt(req.params.id));
    res.sendStatus(204);
  });

  const httpServer = createServer(app);
  return httpServer;
}
