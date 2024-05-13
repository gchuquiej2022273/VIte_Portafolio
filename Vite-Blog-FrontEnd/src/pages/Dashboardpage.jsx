import { Navbar } from "../components/Navbar/Navbar";
import { Content } from "../components/Content/Content";

import "./dashboardpage.css"

export const DashboarPage = () =>{
    return(
        <div className="dashboard-container">
            <section id="home"></section>
                 <Navbar/>
                <Content/>
        </div>
    )
}