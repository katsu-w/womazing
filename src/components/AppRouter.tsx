import {Navigate, Route, Routes} from "react-router";
import Home from "../pages/Home.tsx";
import type {FC} from "react";
import Contacts from "../pages/Contacts.tsx";
import Shop from "../pages/Shop.tsx";
import About from "../pages/About.tsx";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
	          <Route path='/shop' element={<Shop />} />
	          <Route path='/about' element={<About />} />
	          <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
    );
};

export default AppRouter;