import { Container, Row, Col } from "reactstrap";
import voluntechmenu from '../img/voluntechmenu.png';
import correo from '../img/correo.png';
import telefono from '../img/telefono.png';

const Footer = () => {

    return (
        <footer>
            <Row>
                <Col >
                    <h3><img src={voluntechmenu} className="fotopie" />VolunTech</h3>
                    <p>Ayudando a los jóvenes a ganar experiencia en proyectos reales.</p>
                </Col>
                <div className="vl"></div>

                <Col>
                    <h3>Contacto</h3>
                    <div><p><img src={correo} className="contactofoot" />voluntech@voluntech.com</p></div>
                    <div><p><img src={telefono} className="telefono" />Teléfono: 000-000-000</p></div>

                </Col>
                <div className="vl"></div>
                <Col>
                    <h3>Redes Sociales</h3>
                    {/* facebook */}
                    <a class="btn btn-outline-light btn-floating m-1 facebook" href="#!" role="button"
                    ><i class="fa fa-facebook-f"></i
                    ></a>
                    {/* Linkedin */}
                    <a class="btn btn-outline-light btn-floating m-1 linkedin" href="#!" role="button"
                    ><i class="fa fa-linkedin"></i
                    ></a>
                    {/* GitHub */}
                    <a class="btn btn-outline-light btn-floating m-1 github" href="#!" role="button"
                    ><i class="fa fa-github"></i
                    ></a>

                </Col>
            </Row>
            <div className="text-center copy">
                <p>Copyright VOLUNTECH © 2021. All rights reserved.</p>
            </div>
        </footer>

    );

}

export default Footer;