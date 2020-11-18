const purchaseRoutes = [
  {
    path: "/",
    redirect: "/purchase",
  },
  {
    path: "/purchase",
    name: "Purchase",
    component: () =>
      import(/* webpackChunkName: "purchase" */ "./Purchase.vue"),
  },
];

export default purchaseRoutes;
