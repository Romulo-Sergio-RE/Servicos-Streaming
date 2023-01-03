import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loading } from "../components/loading/index.js";
import { ApiStreamingProvider } from "../context/apiStreamingContext";
import { UserAuthProvider } from "../context/userAuthContext.js";
import  {PrivateRoutes} from "./privateRoutes.js";

const LandPage = lazy(() => import("../pages/landPage/index.js"));
const HomePage = lazy(() => import("../pages/homePage/index.js"));
const RegisterPage = lazy(() => import("../pages/registerPage/index.js"));
const SignInPage = lazy(() => import("../pages/signInPage/index.js"));
const ProfilePage = lazy(() => import("../pages/profileUser/index.js"));
const AddStremingPage = lazy(() => import("../pages/addStreaming/index.js"));

export const RoutesPages = () =>{
    return(
        <BrowserRouter>
            <ApiStreamingProvider>
                <UserAuthProvider>
                        <Suspense fallback={<Loading />}>
                            <Routes>
                                <Route element={<PrivateRoutes />}>
                                    <Route path="/home" element={<HomePage />}/>
                                    <Route path="/profile" element={<ProfilePage />}/>
                                    <Route path="/addStreming" element={<AddStremingPage />}/>
                                </Route>
                                <Route path="/" element={<LandPage />}/>
                                <Route path="/register" element={<RegisterPage />}/>
                                <Route path="/signIn" element={<SignInPage />}/>
                            </Routes>
                        </Suspense>
                </UserAuthProvider>
            </ApiStreamingProvider>
        </BrowserRouter>
    )
}