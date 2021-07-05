import OfertaActiva from './OfertaActiva';

import { Container } from 'reactstrap';

const Activas = (props) => {

  //Ofertas Activas = Ofertas que tiene asignado un mentor, le salen en su página

  let listaOfertasActivas = <></>;
  if (props.ofertas) {
    listaOfertasActivas = props.ofertas.map((el) => (<OfertaActiva oferta={el} borrarUsuario={props.borrarUsuario} finalizar={props.finalizar}/>));
  }

  if(listaOfertasActivas.length===0){
    listaOfertasActivas = (
      <p>No estás en ningún proyecto. Vuelvo a gestión y elige uno.</p>
    );
  }

  return (
    <div>
      <Container>
        <div className="separador3"></div>
        <h1 className="robot">Proyectos activos</h1>
        <hr></hr>
        <div>

          {listaOfertasActivas}

        </div>

      </Container>


    </div>

  );

}

export default Activas;