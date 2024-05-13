import PrincipalTitle from "../titles/Title"
import {CardContainer} from "../contectCard"
import {CardProjects} from "../contentProjects"
import {CommentForm} from "../comment/CommentForm"

import LogoOne from "../../assets/img/Experence-Developer.webp"
import LogoSecond from "../../assets/img/FronEnd-Dev.webp"
import LogoTres from "../../assets/img/dev-Desarrollomovil.webp"
import TonnysKinalLogo from "../../assets/img/TonnysKinal.png"

export const Content = () => {
  return (
    <>
      <div className="dashboard-content-container">
        <div className="content-title">
          <div className="content-titles-style">
            <h3 className="content-titles-margin">/Hello, here is</h3>
          </div>
          <div className="content-titles-style-h1">
            <h1 className="content-titles-margin">Gerson Emmanuel Chuquiej Pirir</h1>
          </div>
          <div className="content-subtitle-style">
            <h4>Programador de software / Back-End y Front-End</h4>
          </div>
        </div>
      </div>
      <div>
      <section id="Experience"></section>
        <PrincipalTitle text={"Experience"}/>
        <div className="experience-container">
              <CardContainer
               url={LogoOne}
               title={"Software develop"}
               text={"<h1> Experienced in both functional and OOP:Java, JavaScript </h1>"}/>

              <CardContainer
              url={LogoSecond}
              title={"FrontENd"}
              text={"Este es una pruba"}/>

               <CardContainer
              url={LogoTres}
              title={"Desarrollo Movil"}
              text={"Este es una pruba"}/>
        </div>
        <section id="Project"></section>
        <PrincipalTitle text={"Work"}/>
        <div className="container-work">
        <CardProjects 
        url={TonnysKinalLogo} 
        title={"Tonnys'Kinal"} 
        text={"Gestor administrativo hecho en java para eventos"}/>
        
        <CardProjects 
        url={"https://static.javatpoint.com/tutorial/mean-stack/images/fetching-data-from-node-backend-in-mean-stack4.png"} 
        title={"Back-End"} 
        text={"Back-End de un sistema gestor de productos e inventario"}/>

        <CardProjects 
        url={"https://static.vecteezy.com/system/resources/previews/007/357/817/non_2x/online-hotel-booking-easy-travelling-with-online-booking-apps-flat-template-free-vector.jpg"} 
        title={"Tonnys'Kinal"} 
        text={"Back-FrontENd aplicacion gestor de hoteles online"}/>
        </div>
        <div className="footer-container">
            <div className="footer-container-comment">
                <CommentForm/>
            </div>
            <div className="footer-container-redes">
            <section id="Contact"></section>
            </div>
        </div>
      </div>
    </>
  );
};
