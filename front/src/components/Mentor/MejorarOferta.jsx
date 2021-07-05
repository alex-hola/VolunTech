import Crud from '../../Crud';

import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";

const MejorarOferta = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [nombreOferta, setNombreOferta] = props.useTitulo;
    const [descOferta, setDescOferta] = props.useDesc;
    const [idOferta, setIdOferta] = props.useId;
    const [empresa, setEmpresa] = props.useEmpresa;

    //método que se activa al enviar el form (onSubmit)
    const actualizar = (event) => {
        event.preventDefault();
        props.update({
            "id": idOferta,
            "nombre": nombreOferta,
            "descripcion": descOferta,
            "idUser": props.usuario.noUser,
            "idMentor": props.usuario.idMentor
        });
    }

    return (

        <div>
            <div className="tituloFormulario"> <h2 className="robot">Actualizar petición</h2></div>


            <Form onSubmit={actualizar} className="cajaInferior">
                <div>
                    <p>{empresa.nombreEmpresa}</p>
                    <p>{empresa.email}</p>
                    <p>{empresa.phone}</p>
                </div>
                <FormGroup >
                    <Label for="nombreOferta">Título</Label>
                    <Input
                        type="text"
                        name="nombreOferta"
                        id="nombreOferta"
                        maxLength="50"
                        value={nombreOferta}
                        onChange={(event) => setNombreOferta(event.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label for="descOferta">Descripción</Label>
                    <Input
                        rows="10"
                        cols="40"
                        type="textarea"
                        name="descOferta"
                        id="descOferta"
                        maxLength="600"
                        value={descOferta}
                        onChange={(event) => setDescOferta(event.target.value)} />
                </FormGroup>

                <Button onClick={toggle} type="submit" color="info">
                    Guardar
                </Button>{" "}
            </Form>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader className="cabeceraAmarilla" toggle={toggle}>¡Petición actualizada!</ModalHeader>
                <ModalBody>
                    ¡Has publicado la oferta de proyecto <span className="fuente">{nombreOferta}</span>!
                </ModalBody>
                <ModalFooter>
                    <Link to="/activas"><Button color="info" onClick={toggle}>Aceptar</Button>{' '}</Link>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default MejorarOferta;