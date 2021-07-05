import Crud from '../../Crud';

import React, { useEffect, useState } from 'react';
import Adecco from '../../img/adecco.png';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Oferta = (props) => {

  //Modal del diálogo para apuntarse a una oferta
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [mentor, setMentor] = useState({});
  const [empresa, setEmpresa] = useState({});

  async function loadData() {
    let infoE = await Crud.getEmpresa(props.oferta.id);
    let infoM = await Crud.getMentor(props.oferta.id);
    await setEmpresa(infoE);
    await setMentor(infoM);
  }

  function guardar(e) {
    e.preventDefault();
    //validación de datos!
    props.inscribir(props.oferta.id);
    toggle();
  }

  useEffect(() => {
    loadData();
  }, [mentor]);

  //Botón que sale en el apartado de ofertas disponibles del usuario
  //No sale en el apartado de mis proyectos
  let boton;

  if(props.boton === true){
    boton = (

      <a onClick={toggle} class="btn btn-success">Apuntarse</a>

    );
  }

  return (
    <>
      <div className="card shadow p-3 mb-5 bg-white rounded border border-info">
        <div className="card-header cabeceraVerde">
          <img src={Adecco} className="iconoempresa img-fluid" />
          {empresa.nombreEmpresa}
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.oferta.nombre}</h5>
          <p className="card-text texto">{props.oferta.descripcion}</p>
          <p className="robot">Mentor al cargo: {mentor.name} {mentor.surname}</p>
          <p>{mentor.email} | {mentor.phone}</p>
          <hr class="featurette-divider"/>
          <div style={{textAlign:"right"}}>
            <p className="robot">{props.oferta.fpublicacion}</p>
            {boton}
          </div>
        </div>
      </div>



      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="cabeceraVerde" toggle={toggle}><h2>{props.oferta.nombre}</h2></ModalHeader>
        <ModalBody>
          <h6>Descripción de la oferta</h6>
          <p>{props.oferta.descripcion}</p>
          <hr />
          <h6>Mentor - {mentor.name} {mentor.surname}</h6>
          <hr />
          <p>Pulsa Aceptar si quieres apuntarte a este proyecto.</p>

        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={guardar}>Aceptar</Button>{' '}
          <Button color="warning" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </>

  );
};

export default Oferta;