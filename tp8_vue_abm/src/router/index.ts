import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/donde-estamos",
    name: "donde-estamos",
    component: () => import("../views/DondeEstamosView.vue"),
  },
  {
    path: "/productos",
    name: "productos",
    component: () => import("../views/VistaProductosView.vue"),
  },
  {
    path: "/instrumentos/:id",
    name: "detalle-instrumento",
    component: () => import("../views/DetalleInstrumentoView.vue"),
  },
  { 
    path: "/admin-productos",
    name: "admin-productos",
    component: () => import("../views/InstrumentoListView.vue"),
  },
  {
    path: '/form/:id',
    name: 'form',
    component: () => import('../views/InstrumentoFormView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
