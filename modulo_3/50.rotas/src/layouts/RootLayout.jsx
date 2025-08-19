import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';

export default function RootLayout(){
    return(
        <div style={{fontFamily:"system-ui, aArial", lineHeight: 1.5}}>
            <Navbar/>

            <main style={{padding: 16}}>
                <Outlet/>
            </main>
        </div>
    )
}