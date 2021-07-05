import { Container } from 'reactstrap';
import Oferta from './Oferta';

const MisProyectos = (props) => {

    //Lista de ofertas donde el usuario está apuntado

    let listaOfertas = <></>;
    if (props.ofertas) {
        listaOfertas = props.ofertas.map((el) => (<Oferta oferta={el} boton={false} />));
    }

    if(listaOfertas.length===0){
        listaOfertas = "¡Aún no te has apuntado a ningún proyecto!"
    }

    return (
        <Container>


            <h1 className="robot">Mis proyectos</h1>
            <hr />
            <div>
                {listaOfertas}
            </div>
        </Container>

    );

}

export default MisProyectos;