import {Navigate, Route, Routes} from "react-router";
import Home from "../pages/Home.tsx";
import type {FC} from "react";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
    );
};

export default AppRouter;