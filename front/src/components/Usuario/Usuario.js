import ListaOfertas from './ListaOfertas';

import { Container } from 'reactstrap';

const Usuario = (props) => {

    return (
        <div>
            <Container>
                <h1 className="robot">Ofertas disponibles</h1>

                <hr />
                <ListaOfertas ofertas={props.ofertas} inscribir={props.inscribir} usuario={props.usuario} />

            </Container>

        </div>
    );

}

export default Usuario;