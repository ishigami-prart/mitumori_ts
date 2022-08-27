import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";

export const Router: VFC = memo(() => {
    return (
        <Routes>
            <Route path="/">
                <Home />
            </Route>
        </Routes>
    )
})