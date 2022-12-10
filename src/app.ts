import express, { Application } from "express";
import authRoutes from "./routes/authRoutes";

const app: Application = express();

app.use(authRoutes);

export default app;