import {Outlet} from "react-router";
import Header from "./components/Header/Header.tsx";

function App() {

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default App
