import React from 'react';
import { Jumbotron, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const Aprende = () => {
  return (
    <div>
      <Jumbotron className="jumbo d-md-block" >
          <h1 className="display-3 semit d-md-block robot">Hola,<span className="d-none d-md-block"> voluntario!</span></h1>
          <p className="lead-1 d-none d-md-block">Te damos la bienvenida a VolunTech, la plataforma de colaboración donde aprender con proyectos reales.</p>
          <hr className="my-2 d-none d-md-block" />
          <p className="lead-2 d-none d-md-block">Si quieres saber más sobre nosotros, pulsa aquí!</p>
          <p className="lead-3 d-md-block">
            <Button color="warning"><Link to="/info">Aprende más</Link></Button>
          </p>
      </Jumbotron>
    </div>
  );
};

export default Aprende;