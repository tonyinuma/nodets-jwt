import { profile, signin, signup } from "../controllers/auth.controller";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

const router: Router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', authMiddleware, profile);

export default router;