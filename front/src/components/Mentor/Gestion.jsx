import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ListaGestion from './ListaGestion';
import MejorarOferta from './MejorarOferta';

const Gestion = (props) => {

    //Los datos de ListaGestion se pasan al componente MejorarOferta (formulario)
    //A través del método cambiar, que se envia por props a la ListaGestion
    
    const [titulo, setTitulo] = useState();
    const [desc, setDesc] = useState();
    const [id, setId] = useState();
    const [empresa, setEmpresa] = useState({});

    function cambiar(t, d, i, e){
        setTitulo(t);
        setDesc(d);
        setId(i);
        setEmpresa(e);
    }

    return (

        <div>
            <Container>
                <div className="separador3"></div>
                <Row md="2" xs="1">
                     
                    <Col>
                        <MejorarOferta useTitulo={[titulo, setTitulo]} useDesc={[desc, setDesc]} useId={[id, setId]} useEmpresa={[empresa,setEmpresa]} update={props.update} usuario={props.usuario}/>
                    </Col>
                    <Col>
                        <h2 className="tituloListaMentor robot">Peticiones</h2>
                        <ListaGestion tipo="mentor" ofertas={props.ofertas} cambiar={cambiar} borrarOferta={props.borrarOferta}/>
                    </Col>
                </Row>
            </Container>
        </div>

    );

}

export default Gestion;