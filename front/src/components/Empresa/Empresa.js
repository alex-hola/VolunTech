import logo from '../../img/voluntechmenu.png';

import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';


const Empresa = (props) => {

    return (
        <Container>
            <div style={{textAlign:"center"}}>

                    <div><img src={logo} width="60" ></img></div>
                    <h1 className="robot">Empresa</h1>

            </div>
            <div className="containerEmpresa">


                <Row>
                    <Link to="/empresaCrear"><button class="btn btn-outline-warning my-2 my-sm-0 botonMenu" style={{marginLeft:"5px"}} type="button">Crear Peticiones</button></Link>
                    <Link to="/empresaPeticiones"><button class="btn btn-outline-info my-2 my-sm-0 botonMenu" style={{marginLeft:"5px"}} type="button">Ver Peticiones</button></Link>
                </Row>



            </div>
        </Container>
    );

}

export default Empresa;