import OfertaEmpresa from './OfertaEmpresa';
import Adecco from '../../img/adecco.png';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


const MisPeticiones = (props) => {

  let listaOfertasEmpresa = <></>;
  if (props.ofertas) {
    listaOfertasEmpresa = props.ofertas.map((el) => (<OfertaEmpresa oferta={el} usuario={props.usuario} borrarUsuario={props.borrarUsuario} borrarOferta={props.borrarOferta} />));
  }

  if (listaOfertasEmpresa.length === 0) {
    listaOfertasEmpresa = (
      <div className="containerEmpresa" style={{textAlign:"center"}}>
        <div><p style={{color:"white"}}>No has solitado ninguna petición.</p>
          <Link to="/empresaCrear"><button class="btn btn-outline-warning my-2 my-sm-0" type="button">Crear Petición</button></Link>
        </div>
      </div>
    );
  }

  return (
    <Container>
      <div className="separador3"></div>

      <Row>
        <Col>
          <h1 className="robot">Mis peticiones</h1>
        </Col>

        <Col>
          <img src={Adecco} className="iconoempresa2 img-fluid" />
        </Col>
      </Row>

      <hr class="featurette-divider" />

      <Row>
        <Col>
          {listaOfertasEmpresa}
        </Col>
      </Row>

    </Container>
  );

}

export default MisPeticiones;