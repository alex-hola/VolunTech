import Crud from '../../Crud';
import EliminaUsuario from '../Empresa/EliminaUsuario';

import { useState, useEffect } from 'react';
import { Table, Modal, ModalHeader, ModalBody, Button, ModalFooter } from 'reactstrap';



const OfertaActiva = (props) => {

  const [empresa, setEmpresa] = useState({});
  const [usuarios, setUsuarios] = useState([]);

  async function loadData() {
    let e = await Crud.getEmpresa(props.oferta.id);
    let y = await Crud.getUsuarioEnOferta(props.oferta.id);
    await setEmpresa(e);
    await setUsuarios(y);
  }

  function recargar(){
    loadData();
  }

  //MODAL
  //ver voluntarios
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  //finalizar una petición
  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  //eliminar usuario
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(!showModal);
  }

  useEffect(() => {
    loadData();
  }, []);

  function finalizar() {
    props.finalizar(props.oferta.id);
    loadData();
    toggle2();
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
              <button onClick={openModal} style={{ border: "none" }}><i style={{ color: "red" }} className="fa fa-trash fa-2x "></i></button>
              <EliminaUsuario oferta={props.oferta} usuario={user} showModal={showModal} setShowModal={openModal} borrarUsuario={props.borrarUsuario} recargar={recargar}/>
            </td>
          </tr>
        );
      });
  }

  let contenido = (<Table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Teléfono</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {filas}
    </tbody>
  </Table>);

  if (filas.length === 0) {
    contenido = "No hay voluntarios apuntados a este proyecto."
  }

  return (
    <>
      <div style={{ marginTop: "25px" }}>
        <div class="card">
          <div class="card-header cabeceraAmarilla">
            {empresa.nombreEmpresa}
          </div>
          <div class="card-body">
            <h5 class="card-title">{props.oferta.nombre}</h5>
            <p class="card-text">{props.oferta.descripcion}</p>
            <hr></hr>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{empresa.email} | {empresa.phone}</p>
              <p>Solicitada: {props.oferta.fpublicacion}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }} >
              <button className="btn btn-info my-2 my-sm-0" type="button" onClick={toggle}>Ver voluntarios</button>
              <button className="btn btn-outline-danger my-2 my-sm-0" type="button" onClick={finalizar}>Finalizar</button>
            </div>
          </div>
        </div>

        <div style={{ borderRadius: "0 0 15px 15px" }} id="collapseOne" className={open ? "collapse show" : "collapse"} aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
            {contenido}
          </div>
        </div>
      </div>

      {/* Finaliza una peticion */}
      <Modal isOpen={modal2} toggle={toggle2}>
        <ModalHeader className="cabeceraAmarilla" toggle={toggle2}><h2>{props.oferta.nombre}</h2></ModalHeader>
        <ModalBody>
          <h6>¿Quieres dar por finalizado este proyecto?</h6>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={finalizar}>Finalizar</Button>{' '}
          <Button color="info" onClick={toggle2}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </>
  );

}

export default OfertaActiva;

