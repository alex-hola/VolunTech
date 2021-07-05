import foto1 from '../../img/fotozoom.png';
import foto2 from '../../img/sobrenosotros.png';
import foto3 from '../../img/curriculum.png';
import foto4 from '../../img/josep.png';
import foto5 from '../../img/alex.png';
import foto6 from '../../img/mark.png';

const Info = () => {

  return (

    <div class="container marketing">

      {/* <hr class="featurette-divider"/> */}

      <div class="row featurette">
        <div class="col-md-7 primertexto reveal-text">
          <h2 class="featurette-heading">Pon en práctica tus conocimientos  <span class="text-muted">Proyectos reales</span></h2>
          <p class="lead">Pon a prueba tus conocimientos realizando proyectos de verdad a través de nuestra plataforma.</p>
        </div>
        <div class="col-md-5">
          <img src={foto1} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto redes" width="500" height="500" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />

        </div>
      </div>

      <hr class="featurette-divider separador2"/>

      <div class="row featurette ">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">Ayuda a otros de una forma diferente. <span class="text-muted">Voluntariado</span></h2>
          <p class="lead">Colabora y ayuda a desarrollar páginas web, logos o aplicaciones para quien lo necesite. Trabaja solo o con otros voluntarios como tú.</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img src={foto2} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto integracion" width="500" height="500" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />

        </div>
      </div>

      <hr class="featurette-divider separador2" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Currículum. <span class="text-muted">Crece.</span></h2>
          <p class="lead">Win-Win. Amplia tu currículum añadiendo los proyectos en los que has participado. Suma puntos para destacar y conseguir el trabajo que quieres.</p>
        </div>
        <div class="col-md-5">
          <img src={foto3} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto curriculum" width="250" height="250" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />

        </div>
      </div>
      
      <hr class="featurette-divider" style={{marginTop:"40px"}}/>

      <h2 class="featurette-heading">Nuestro Equipo</h2>
      <div class="row featurette">
        <div class="col-md-3">
          <div class="our-team">
            <img src={foto4} alt="team member" className="fototeam josep" />
            <div class="team-content">
              <h3 className="name">Josep Lloveras</h3>
              <span className="post">Diseñador Web</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="our-team">
            <img src={foto5} alt="team member" className="fototeam" />
            <div class="team-content">
              <h3 className="name">Alejandro Castellano</h3>
              <span className="post">Responsable Front end</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="our-team">
            <img src={foto6} alt="team member" className="fototeam" />
            <div class="team-content">
              <h3 className="name">Mark Bertran</h3>
              <span className="post">Responsable Back end</span>
            </div>
          </div>
        </div>
      </div>

      {/* <hr class="featurette-divider" /> */}
    </div>

  );

}

export default Info;
