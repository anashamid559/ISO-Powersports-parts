import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { publicRoute } from "./allRoutes";
import { routeConstant } from "./routeConstant";

// Define the route type interface
export interface RouteType {
    path: string;
    element: React.ComponentType;
}


const AuthRoute: React.FC = () => {
    const isAuthenticated = true; 
    return (
        <Routes>
            {publicRoute.map((route: RouteType, index: number) => (
                <Route
                    key={index}
                    path={route.path}
                    element={<route.element />}
                />
            ))}
            <Route
                path="*"
                element={<Navigate to={routeConstant.home.path} replace />}
            />
        </Routes>
    );
};

export default AuthRoute;
