import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashboard";
import TakeOrder from "../components/TakeOrder";
import OrderPlaced from "../components/OrderPlaced";
import Category from "../admin/Category";
import Products from "../admin/Products";
import SalesReport from "../admin/SalesReport";
import Users from "../admin/Users";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/TakeOrder",
    name: "TakeOrder",
    component: TakeOrder,
  },
  {
    path: "/OrderPlaced",
    name: "OrderPlaced",
    component: OrderPlaced,
  },
  {
    path: "/Category",
    name: "Category",
    component: Category,
  },
  {
    path: "/Products",
    name: "Products",
    component: Products,
  },
  {
    path: "/SalesReport",
    name: "SalesReport",
    component: SalesReport,
  },
  {
    path: "/Users",
    name: "Users",
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
