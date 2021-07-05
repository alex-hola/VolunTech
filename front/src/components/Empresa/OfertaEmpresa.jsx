import Crud from '../../Crud';
import EliminaUsuario from './EliminaUsuario';

import React, { useState, useEffect } from 'react';


import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const OfertaEmpresa = (props) => {

  //Mentor y usuarios que trabajan en el proyecto
  const [mentor, setMentor] = useState({});
  const [usuarios, setUsuarios] = useState([]);

  async function loadData() {
    let m = await Crud.getMentor(props.oferta.id);
    let u = await Crud.getUsuarioEnOferta(props.oferta.id);
    await setMentor(m);
    await setUsuarios(u);
  }

  useEffect(() => {
    loadData();
  }, []);

  //eliminar petición
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  //enviar mensaje
  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  //elimina usuario
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(!showModal);
  }

  function borrar() {
    props.borrarOferta(props.oferta.id)
    loadData();
    toggle();
  }




  //Estado de la oferta, si tiene mentor o no
  let estado;
  if (props.oferta.validada === 1) {
    estado = "validada";
  } else {
    estado = "noValidada";
  }

  //usuarios
  let filas = <></>;
  if (usuarios) {
    filas = usuarios
      .map((user) => {
        return (
          <tr key={user.noUser}>
            <td>{user.name} {user.surname}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td style={{ textAlign: "center" }}>
              <button onClick={openModal} style={{ border: "none" }}><i style={{ color: "var(--amarillo)" }} className="fa fa-trash fa-2x "></i></button>
              <EliminaUsuario oferta={props.oferta} usuario={user} showModal={showModal} setShowModal={openModal} borrarUsuario={props.borrarUsuario} />
            </td>
          </tr>
        );
      });
  }

  //mentor y usuarios
  let participantes = (
    <Table responsive striped>

      <thead>
        <tr className="robot">
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{mentor.name} {mentor.surname}</td>
          <td>{mentor.email}</td>
          <td>{mentor.phone}</td>
          <td style={{ textAlign: "center" }}>
            <Button onClick={toggle2} color="info">Enviar Mensaje</Button>
          </td>
        </tr>
        {filas}
      </tbody>
    </Table>
  );

  if (estado === "noValidada") {
    participantes = "Aún no hay asignado un mentor a tú petición."
  }

  return (
    <>
      <div className={estado} style={{ marginBottom: "50px" }}>
        <div className="card">
          <div className="card-header cabeceraAzul">

            <div className="nameEmpresa">{props.oferta.nombre}</div>

          </div>
          <div className="card-body">

            <h5 className="card-title">{props.usuario.nombreEmpresa} </h5>
            <p className="texto" style={{ paddingBottom: "40px" }} className="card-text">{props.oferta.descripcion}</p>
            <hr />

            <h5>Mentor y usuarios</h5>
            {participantes}

            <div className="botonesEmpresa">

              <Button color="warning" onClick={toggle}>Eliminar petición</Button>

            </div>

          </div>
        </div>


      </div>

      {/* Eliminar petición */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="cabeceraAzul" toggle={toggle}><h2>{props.oferta.nombre}</h2></ModalHeader>
        <ModalBody>
          <h6>¿Seguro que quieres eliminar esta petición?</h6>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={borrar}>Eliminar</Button>{' '}
          <Button color="warning" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>

      {/* Enviar mensaje */}
      <Modal isOpen={modal2} toggle={toggle2}>
        <ModalHeader className="cabeceraAzul" toggle={toggle2}><h2>Enviar mensaje a {mentor.name}</h2></ModalHeader>
        <ModalBody>

          <Form>
            <FormGroup >
              <Label for="nombreOferta">Título</Label>
              <Input
                type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="descOferta">Mensaje</Label>
              <Input
                rows="10"
                cols="40"
                type="textarea" />
            </FormGroup>
            <Button onClick={toggle2} color="info">
              Enviar
            </Button>{" "}
            <Button type="button" onClick={toggle2} color="warning">
              Cancelar
            </Button>
          </Form>

        </ModalBody>

      </Modal>

    </>
  );
};

export default OfertaEmpresa;