import {  Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/userAuthContext";

export const PrivateRoutes = () =>{
    const authUser = useAuth();

    return(
        authUser.user? <Outlet /> : <Navigate to={"/signIn"}/>
    )
}
