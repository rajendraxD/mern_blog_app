import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import LoginPage from "../pages/auth/login/LoginPage";

const route = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "*",
        element: <PageNotFound />
    }
]);
export default route;