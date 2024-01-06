import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../components/organisms/Header";
import * as Pages from "../components/pages";

const AppRouter = () => {

    //in this obj you can describe properties for each navigation element
    let routeItems = [
        { name: "Main", linkTo: "", header: true, page: <Pages.Home /> },
        { name: "Sign up", linkTo: "SignUp", header: true, page: <Pages.SignUpPage /> },
        { name: "Contact", linkTo: "logIn", header: true, page: <Pages.LogIn /> },
        { name: "Log In", linkTo: "logIn", header: false, page: <Pages.LogIn /> }
    ];

    let liParam = routeItems
        .filter(item => item.type === "headerItem")
        .map(({ name, linkTo }) => ({ name, linkTo }));

    return (
        <div>
            <Router>
                <Routes>
                    {routeItems.map((item, index) => {
                        return (
                            <Route
                                key={index}
                                path={`/${item.linkTo}`}
                                element={
                                    <>
                                        {item.header && <Header/>}
                                        {item.page}
                                    </>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default AppRouter;
