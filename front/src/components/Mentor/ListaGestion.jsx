import OfertaGestion from './OfertaGestion.jsx';

const ListaGestion = (props) => {

    let listaOfertas = <></>;
    if (props.ofertas){
        listaOfertas=props.ofertas.map( (el) => (<OfertaGestion tipo={props.tipo} oferta={el} cambiar={props.cambiar} borrarOferta={props.borrarOferta}/>));
    }

    if(listaOfertas.length===0){
        listaOfertas = "En este momento no hay ofertas disponibles."
    }

    return (
        <>            
            {listaOfertas}
        </>
    );
}

export default ListaGestion;