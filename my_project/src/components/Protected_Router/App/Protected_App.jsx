import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Protected_Home } from "../pages/Protected_Home";
import { Protected_Login } from "../pages/Protected_Login";
import { Protected_Setting } from "../pages/Protected_Setting";
import {Protected_Navbar} from "../Components/NavBar/Navbar";
import { Provider } from "react-redux";
import Store from "../store/store"
import {PrivateRoute} from '../PrivateRoute'
function Protected_App(){
    return(
        // <BrowserRouter>
        <>
            <Provider store={Store}>
            <Protected_Navbar />
            <Routes>
                
                <Route path="/" element={<Protected_Home />}/>
                <Route path="/Protected_Login" element={<Protected_Login />}/>
                <Route element={<PrivateRoute />}>
                    <Route path="/Protected_Setting" element={<Protected_Setting />}/>
                </Route>
            </Routes>
            </Provider>
        </>
        // </BrowserRouter>
    )
}

export default Protected_App