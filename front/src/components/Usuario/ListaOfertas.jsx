import Oferta from './Oferta.jsx';

const ListaOfertas = (props) => {

    //Lista de ofertas disponibles con mentor asignado

    let listaOfertas = <></>;
    if (props.ofertas){
        listaOfertas = props.ofertas.map( (el) => (<Oferta tipo={props.tipo} oferta={el} inscribir={props.inscribir} usuario={props.usuario} boton={true} />));
    }

    if(listaOfertas.length===0){
        listaOfertas = "Lo sentimos, no hay ofertas disponibles en este momento.";
    }

    return (
        <>            
            {listaOfertas}
        </>
    );
}

export default ListaOfertas;