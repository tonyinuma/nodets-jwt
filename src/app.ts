import express, { Application } from "express";
import authRoutes from "./routes/authRoutes";
import morgan from "morgan";

const app: Application = express();

/**
 * Middlewares
 */
app.use(morgan('dev'));

/**
 * Routes
 */
app.use(authRoutes);

export default app;