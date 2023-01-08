import express, { Application } from "express";
import authRoutes from "./routes/authRoutes";
import morgan from "morgan";
import "./db";

const app: Application = express();

/**
 * Middlewares
 */
app.use(morgan('dev'));
app.use(express.json());

/**
 * Routes
 */
app.use('/api/auth', authRoutes);

export default app;