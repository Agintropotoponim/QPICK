import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../router/routes";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route path={route.path} element={route.element} exact={route.exact} key={route.path} />)
            }
        </Routes>
    );
}

export default AppRouter;