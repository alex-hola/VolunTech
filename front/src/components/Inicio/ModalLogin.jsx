/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import logo from '../../img/voluntechmenu.png';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';

const ModalLogin = (props) => {

  const login = props.login;


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const guardar = (event) =>{

    event.preventDefault();
    login({
      email,
      password
    });

  }

  return (
    <div>
      <Modal isOpen={props.showModal} toggle={props.setShowModal} className="login">
        <ModalHeader className="cabecera robot" toggle={props.setShowModal}>Bienvenido de nuevo</ModalHeader>
        <ModalBody>

          

          <Form onSubmit={guardar}>

            <div class="text-center mb-4">
              {/* <img class="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" /> */}
              <img src={logo} width="60"></img>
              <h1 class="h3 mb-3 font-weight-normal robot">VolunTech</h1>
            </div>

            <div class="form-label-group">
              <input 
                type="email"
                id="inputEmail" 
                value={email}
                onChange = {(event) => setEmail(event.target.value)}
                class="form-control" 
                placeholder="Dirección email" 
                required autofocus />
              <label for="inputEmail"></label>
            </div>

            <div class="form-label-group">
              <input 
                type="password" 
                id="inputPassword" 
                value={password}
                onChange = {(event) => setPassword(event.target.value)}
                class="form-control" 
                placeholder="Contraseña" 
                required />
              <label for="inputPassword"></label>
            </div>

            <button class="btn btn-lg btn-info btn-block" type="submit">Iniciar sesión</button>
            <p class="mt-5 mb-3 text-muted text-center">&copy; 2021</p>
          </Form>


        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={props.setShowModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalLogin;