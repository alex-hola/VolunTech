import AddOferta from '../Oferta/AddOferta';

import { Container, Row, Col } from 'reactstrap';

const AgregarOferta = (props) => {

    return (

        <Container>
            <div className="separador3"></div>
            <Row md="2" xs="1">
                <Col>
                    <AddOferta titulo="¿Qué necesitas?" guardar={props.guardar} id={props.id} />
                </Col>
                <Col>
                    <Container>
                        <h6>¿Cómo solicitar un proyecto?</h6>
                        <p>Rellena este formulario con un título y una descripción de lo que quieres.</p>
                        <p>Un mentor de nuestro equipo se pondrá en contacto con usted para concretar los detalles.</p>
                        <p>Una vez validado, el proyecto será publicado en nuestra plataforma.</p>
                    </Container>
                </Col>
            </Row>

        </Container>

    );

}

export default AgregarOferta;