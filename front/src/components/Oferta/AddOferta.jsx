import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";

const AddOferta = (props) => {

    //Diálogo de petición de oferta enviada
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [nombreOferta, setNombreOferta] = useState('');
    const [descOferta, setDescOferta] = useState('');

    //método que se activa al enviar el form (onSubmit)
    const guardar = (event) => {
        event.preventDefault();
        props.guardar([props.id, nombreOferta, descOferta]);
    }

    return (
        <Container className="formulario" fluid="md">

            <div className="tituloFormulario"> <h2>{props.titulo}</h2></div>

            <Form onSubmit={guardar} className="cajaInferior">



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

                <Button type="submit" onClick={toggle} color="info">
                    Guardar
                </Button>{" "}
                <Button type="button" color="warning">
                    Cancelar
                </Button>
            </Form>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader className="cabeceraAzul" toggle={toggle}>Petición enviada!</ModalHeader>
                <ModalBody>
                    <p>Has enviado la petición <span className="fuente">{nombreOferta}!</span></p>
                    <p>Un mentor del equipo se pondrá en contacto contigo.
                    ¡Gracias!</p>
                </ModalBody>
                <ModalFooter>
                    <Link to="/empresaVer"><Button color="info" onClick={toggle}>Aceptar</Button>{' '}</Link>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default AddOferta;