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

const NavegacionEmpresa = (props) => {
  //Barra de navegación
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top" className="barramenu navEmpresa">
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
                <Link className="link navbar-link" to="/empresaVer"> <NavLink className="linkcolor primero">Mis peticiones</NavLink></Link>
              </div>
            </NavItem>

          </Nav>
          <Nav>
            <Link to="/empresaPerfil"><button class="acceso btn btn-outline-info my-2 my-sm-0" type="button">Perfil</button></Link>
            <Link to="/empresaCrear"><button class="acceso btn btn-outline-warning my-2 my-sm-0" type="button">Crear petición</button></Link>
            <Link to="/"><button onClick={props.logout} class="acceso btn btn-outline-warning my-2 my-sm-0" type="button">Salir</button></Link>
          </Nav>

        </Collapse>
      </Navbar>
      <div className="separador"></div>
      <div className="separador3"></div>
    </div>
  );
}

export default NavegacionEmpresa;