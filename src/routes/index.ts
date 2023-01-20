import { Router } from "express";
import CategoryRoutes from "./category.routes";
import AuthRoutes from "./auth.routes";
const router = Router();

router.use("/category", CategoryRoutes);
router.use("/auth", AuthRoutes);

export default router;
