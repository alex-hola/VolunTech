import React, { useEffect, useState } from 'react';
import Adecco from '../../img/adecco.png';
import Crud from '../../Crud';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const OfertaGestion = (props) => {

  //Diálogo
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [empresa, setEmpresa] = useState({});
  
  async function loadData(){
    let info = await Crud.getEmpresa(props.oferta.id);
    await setEmpresa(info);
  }

  function borrar (){
    props.borrarOferta(props.oferta.id);
    toggle();
  }

  useEffect(() => {
   loadData();
  },[]);


  return (
    <>
    <div className="card" style={{border:"1px solid lightgrey"}}>
      <div className="card-header cabeceraAmarilla">
        {empresa.nombreEmpresa}
        <img src={Adecco} className="iconoempresa2 img-fluid" style={{marginLeft:"220px"}}/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.oferta.nombre} </h5>
        <p className="card-text">{props.oferta.descripcion}</p>
        <hr />
        <h6>Contacto</h6>
        <p>{empresa.email} | {empresa.phone}</p>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <button onClick={() =>props.cambiar(props.oferta.nombre,props.oferta.descripcion, props.oferta.id, empresa)} class="btn btn-info"><a href="#">Editar oferta</a></button>
          <button onClick={toggle} class="btn btn-warning">Descartar</button>
        </div>
      </div>
    </div>
    <hr></hr>

    {/* Eliminar petición */}
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="cabeceraAmarilla" toggle={toggle}><h2>{props.oferta.nombre}</h2></ModalHeader>
        <ModalBody>
          <h6>¿Seguro que quieres descartar esta petición?</h6>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={borrar}>Descartar</Button>{' '}
          <Button color="info" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
</>
  );
};

export default OfertaGestion;