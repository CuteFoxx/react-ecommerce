import {Outlet} from "react-router";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
    return (
        <div className='flex flex-col min-h-screen font-sans'>
            <Header/>
            <main className='container flex-grow'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
