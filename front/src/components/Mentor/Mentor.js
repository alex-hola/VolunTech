import logo from '../../img/voluntechmenu.png';

import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';


const EmpresaMenu = (props) => {

    return (
        <Container>
            <div style={{textAlign:"center"}}>

                    <div><img src={logo} width="60" ></img></div>
                    <h1 className="robot">Mentor</h1>

            </div>
            <div className="containerMentor">


                <Row>
                    <Link to="/gestion"><button class="btn btn-outline-warning my-2 my-sm-0 botonMenu" style={{marginLeft:"5px"}} type="button">Gestión</button></Link>
                    <Link to="/activas"><button class="btn btn-outline-info my-2 my-sm-0 botonMenu" style={{marginLeft:"5px"}} type="button">Proyectos</button></Link>
                </Row>



            </div>
        </Container>
    );

}

export default EmpresaMenu;