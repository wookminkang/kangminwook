import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";


export function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}