import Crud from '../../Crud';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Adecco from '../../img/adecco.png';

import { Button } from 'reactstrap';

const OfertaInicio = (props) => {

  const [empresa, setEmpresa] = useState({});
  const [mentor, setMentor] = useState({});

  async function loadData(){
    let infoE = await Crud.getEmpresa(props.oferta.id);
    let infoM = await Crud.getMentor(props.oferta.id);
    await setEmpresa(infoE);
    await setMentor(infoM);
  }

  useEffect(() => {
   loadData();
  },[empresa]);

  return (
    <>
    <div className="card shadow p-3 mb-5 bg-white rounded border border-info">
      <div className="card-header cabecera">
        <img src={Adecco} className="iconoempresa img-fluid" />
        {empresa.nombreEmpresa}
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.oferta.nombre} </h5>
        <p className="card-text">{props.oferta.descripcion}</p>
        <hr class="featurette-divider"/>
        <h6 className="robot">Mentor: {mentor.name} {mentor.surname}</h6>
        
      
        <div style={{textAlign:"right"}}>
          <p className="robot">{props.oferta.fpublicacion}</p>
          <Link to="/registroUsuario"><Button color="info">Acceder</Button></Link>
          </div>
      </div>
    </div>
</>
  );
};

export default OfertaInicio;