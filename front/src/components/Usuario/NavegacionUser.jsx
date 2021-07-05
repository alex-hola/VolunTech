import logo from '../../img/voluntechmenu.png';
import '../../styles/nav.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavegacionUser = (props) => {
  
  //Barra de navegación
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (  
    <div>
      <Navbar color="dark" dark expand="md" fixed="top" className="barramenu navUsuario"> 
        <Link to="/"><NavbarBrand><img src={logo} width="60"></img></NavbarBrand></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

          
            <NavItem>
            <div className="container brackets">
              <Link className="link navbar-link" to="/info"> <NavLink className="linkcolor primero">¿Quiénes somos?</NavLink></Link>
            </div>
            </NavItem>
           
            <NavItem>
            <div className="container brackets">
              <Link className="link navbar-link" to="/"> <NavLink className="linkcolor primero">Ofertas disponibles</NavLink></Link>
            </div>
            </NavItem>

            <NavItem>
            <div className="container brackets">
              <Link className="link navbar-link" to="/misProyectos"> <NavLink className="linkcolor primero">Mis Proyectos</NavLink></Link>
            </div>
            </NavItem>

          </Nav>  
          <Nav>
          <Link to="/perfilUsuario"><button class="acceso btn btn-outline-info my-2 my-sm-0" type="button">{props.nombre}</button></Link>
          <Link to="/"><button onClick={props.logout} class="acceso btn btn-outline-warning my-2 my-sm-0" type="button">Salir</button></Link>
          </Nav>
        
        </Collapse>
      </Navbar>
      <div className="separador"></div>
      <div className="separador3"></div>
    </div>
  );
}

export default NavegacionUser;