import './styles/main.scss'
import {BrowserRouter} from "react-router";
import AppRouter from "./components/AppRouter.tsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

export function App() {

  return (
    <BrowserRouter>
        <Header />
        <AppRouter />
	      <Footer />
    </BrowserRouter>
  )
}
