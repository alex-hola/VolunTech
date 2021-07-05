import logo from '../../img/voluntechmenu.png';
import ModalLogin from './ModalLogin.jsx';
import '../../styles/nav.css';

import React, { useState } from 'react';
import { Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

const Navegacion = ({ fixa, login }) => {

  //Barra de navegación
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //Modal del diálogo para el login  
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {

    setShowModal(!showModal);
  }


  return (

    <div fluid={true}>
      {fixa ?
        <div className="separador"></div>
        : <></>}
      <Navbar color="dark" dark expand="md" fixed={fixa ? "top" : "false"} className="barramenu robot">
        <NavbarBrand href="/"><img src={logo} width="60"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <div className="container brackets">
                <Link className="link navbar-link sesion"><NavLink onClick={openModal} className="primero">Iniciar Sesión</NavLink></Link>
                <ModalLogin showModal={showModal} setShowModal={openModal} login={login}/>
              </div>
            </NavItem>
            
            <NavItem>
              <div className="container brackets">
                <Link className="link navbar-link" to="/info"> <NavLink className="primero">¿Quiénes somos?</NavLink></Link>
              </div>
            </NavItem>
          </Nav>
          <Nav>
            <Link to="/registroEmpresa"><button class="acceso btn btn-outline-info my-2 my-sm-0" type="button">Acceso empresa</button></Link>
            <Link to="/registroUsuario"><button class="acceso btn btn-outline-warning my-2 my-sm-0" type="button">Acceso voluntario</button></Link>
          </Nav>
          

        </Collapse>
      </Navbar>

      <ModalLogin modal={false} />

    </div>
  );
}

export default Navegacion;