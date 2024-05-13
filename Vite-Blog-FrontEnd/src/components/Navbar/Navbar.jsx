import logo from "../../assets/img/LogoPrincipal.png"
import { useState , useEffect} from "react"

/* eslint-disable react/prop-types */
const Navlogo = () =>{
    return(
        <div className="nav-logo-container">
            <img src={logo} alt="Logo principal"
                width="100%"
                height="100%"
            />
        </div>
    )
}

const NavButton = ({text, id}) =>{
    return(
        <a href={`#${id}`} className="nav-button">
            {text}
        </a>
    )
}


export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0; //detecta movimiento
        setScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <nav className={scrolled ? 'nav-container scrolled' : 'nav-container'}>
        <Navlogo />
        <div className="nav-buttons-container">
          <NavButton text="//Home" id="home"/>
          <NavButton text="//Experience" id="Experience"/>
          <NavButton text="//Project" id="Project"/>
          <NavButton text="//Contacto" id="Contact"/>
        </div>
      </nav>
    );
}