import JumboAprende from './JumboAprende.jsx';
import OfertaInicio from './OfertasInicio.jsx';

import { Container, Row, Col } from 'reactstrap';

const Inicio = (props) => {

    let listaOfertas = <></>;
    if (props.ofertas) {
        listaOfertas = props.ofertas.map((el) => (<OfertaInicio oferta={el} />));
    }

    return (
        <Container>
            <Row>
                <Col>

                    <JumboAprende />

                </Col>
            </Row>
            <Row>
                <Col>
                    {listaOfertas}
                </Col>
            </Row>
        </Container>

    );
}

export default Inicio;