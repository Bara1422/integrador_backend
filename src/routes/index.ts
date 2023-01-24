import { Router } from "express";
import CategoryRoutes from "./category.routes";
import AuthRoutes from "./auth.routes";
import OrderRoutes from "./order.routes";
const router = Router();

router.use("/category", CategoryRoutes);
router.use("/auth", AuthRoutes);
router.use("/orders", OrderRoutes);

export default router;
