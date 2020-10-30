import { Dashboard } from "@material-ui/icons";
import DashboardPage from "./views/dashboard";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/admin"
    }
];

export default dashboardRoutes;