import { createRouter, createWebHistory } from "vue-router";

import notFoundRoutes from "@/app/not-found/not-found.routes";
import purchaseRoutes from "@/app/purchase/purchase.routes";

const routes = [...notFoundRoutes, ...purchaseRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
