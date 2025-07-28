import './App.scss'
import {BrowserRouter} from "react-router";
import AppRouter from "./components/AppRouter.tsx";
import Header from "./components/Header.tsx";

function App() {

  return (
    <BrowserRouter>
        <Header />
        <AppRouter />
    </BrowserRouter>
  )
}

export default App
