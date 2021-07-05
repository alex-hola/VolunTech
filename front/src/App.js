import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//import de pages
import Inicio from './components/Inicio/Inicio.js';
import Usuario from './components/Usuario/Usuario.js';
import Mentor from './components/Mentor/Mentor.js';
import Empresa from './components/Empresa/Empresa.js';

//import de componentes
import Navegacion from './components/Inicio/Navegacion.jsx';
import ModalLogin from './components/Inicio/ModalLogin.jsx';
import RegistroUsuario from './components/Inicio/RegistroUsuario';
import RegistroEmpresa from './components/Inicio/RegistroEmpresa.jsx';

import Footer from './components/Footer';
import Info from './components/Inicio/Info.jsx';


//Import USUARIO VOLUNTARIO
import NavegacionUser from './components/Usuario/NavegacionUser';
import PerfilUsuario from './components/Usuario/PerfilUsuario';
import MisProyectos from './components/Usuario/MisProyectos';

//import EMPRESA
import NavegacionEmpresa from './components/Empresa/NavegacionEmpresa';
import PerfilEmpresa from './components/Empresa/PerfilEmpresa';
import AgregarOferta from './components/Empresa/AgregarOferta.jsx';
import MisPeticiones from './components/Empresa/MisPeticiones.jsx';

//import MENTOR
import NavegacionMentor from './components/Mentor/NavegacionMentor';
import Activas from './components/Mentor/Activas';
import Gestion from './components/Mentor/Gestion';

//import crud
import Crud from './Crud';

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  //usuario login
  const [usuario, setUsuario] = useState({});

  //arrays de ofertas
  const [ofertas, setOfertas] = useState([]);
  const [ofertasValidas, setOfertasValidas] = useState([]);
  const [ofertasFiltradas, setOfertasFiltradas] = useState([]);
  const [ofertasUsuario, setOfertasUsuario] = useState([]);
  const [ofertasEmpresa, setOfertasEmpresa] = useState([]);
  const [ofertasMentor, setOfertasMentor] = useState([]);


  //pseudo LOGIN
  //Solo es para saber el tipo de usuario
  async function login(credenciales) {
    let user = await Crud.getUser(credenciales);
    setUsuario(user);
  }

  //LOGOUT
  const logout = () => {
    setUsuario(0);
  }

  //Carga las ofertas de la página de inicio
  async function loadDataInicio() {
    let o = await Crud.getOfertasValidadas();
    setOfertas(o);
  }

  //inscribir a un usuario voluntario
  //USUARIO VOLUNTARIO
  async function inscribir(idOferta) {
    let i = await Crud.setUserOferta([usuario.idVoluntario, idOferta]);
    loadDataUsuario();
  }


  //guarda una oferta
  //EMPRESA
  async function guardaOferta(oferta) {
    await Crud.guardar(oferta);
    loadDataEmpresa();
  }

  //actualiza una peticion
  //MENTOR
  async function update(oferta) {
    await Crud.update(oferta);
    await Crud.setValidacion(oferta);
    loadDataMentor();
  }

  //finalizar un proyecto{
  async function finalizar(oferta) {
    await Crud.setTermino(oferta);
    loadDataMentor();
  }

  //borra un usuario voluntario de una oferta
  async function borrarUsuarioOferta(datos) {
    await Crud.removeUserOferta(datos);
    if (usuario.typeOfUser === 1) loadDataUsuario();
    if (usuario.typeOfUser === 2) loadDataEmpresa();
    if (usuario.typeOfUser === 3) loadDataMentor();
    await loadDataInicio();
  }

  //borra una oferta junto con los usuarios apuntados
  async function borrarOferta(oferta) {
    await Crud.removeOferta(oferta);
    if (usuario.typeOfUser === 2) loadDataEmpresa();
    if (usuario.typeOfUser === 3) loadDataMentor();
  }


  async function loadDataUsuario() {
    let userOffers = await Crud.getOfertasUsuario(usuario.idVoluntario);
    let validatedOffers = await Crud.getOfertasValidadas();

    let ids = userOffers.map(e => e.id);

    let filtradas = validatedOffers.filter(e => ids.indexOf(e.id) == -1);

    //Filtro las ofertas porque necesito que no salgan como disponibles las ofertas
    //donde el usuario esta ya apuntado 

    await setOfertasValidas(validatedOffers);
    await setOfertasUsuario(userOffers);
    await setOfertasFiltradas(filtradas);
  }

  async function loadDataMentor() {
    let m = await Crud.getOfertas();
    let me = await Crud.getOfertasMentor(usuario.noUser);
    await setOfertas(m);
    await setOfertasMentor(me);
  }

  async function loadDataEmpresa() {
    let empresa = await Crud.getOfertasEmpresa(usuario.idEmpresa);
    await setOfertasEmpresa(empresa);
  }


  //Dependiendo del tipo de usuario se cargan unos datos u otros
  useEffect(() => {

    if (usuario) {
      switch (usuario.typeOfUser) {
        case 1:
          loadDataUsuario();
          break;
        case 2:
          loadDataEmpresa();
          break;
        case 3:
          loadDataMentor();
          break;
        default:
          loadDataInicio();
          break;
      }
    }
  }, [usuario]);

  //Controlar el nav de inicio
  const [pujo, setPujo] = useState(false);

  const roda = (e) => console.log(e.deltaY > 0 ? setPujo(false) : setPujo(true));


  // if y varios returns segun el tipo de usuario que sea

  switch (usuario.typeOfUser) {

    case 1:
      /* ------------- USUARIO VOLUNTARIO ------------------- */

      return (
        <div className="App" onWheel={roda}>
          <BrowserRouter>
            <NavegacionUser nombre={usuario.name} logout={logout} />
            <Switch>
              <Route exact path="/" render={() => <Usuario usuario={usuario} ofertas={ofertasFiltradas} inscribir={inscribir} />} />
              <Route path="/info" render={() => <Info />} />
              <Route path="/perfilUsuario" render={() => <PerfilUsuario usuario={usuario} />} />
              <Route path="/misProyectos" render={() => <MisProyectos ofertas={ofertasUsuario} usuario={usuario} />} />

            </Switch>

          </BrowserRouter>
          <Footer />
        </div>
      );
      break;
    case 2:
      /* --------------- EMPRESA  ------------------- */
      return (
        <div className="App" onWheel={roda}>
          <BrowserRouter>

            <NavegacionEmpresa logout={logout} />

            <Switch>

              <Route exact path="/" render={() => <Empresa />} />
              <Route path="/info" render={() => <Info />} />
              <Route path="/empresaPeticiones" render={() => <MisPeticiones ofertas={ofertasEmpresa} usuario={usuario} borrarUsuario={borrarUsuarioOferta} borrarOferta={borrarOferta} />} />
              <Route path="/empresaPerfil" render={() => <PerfilEmpresa usuario={usuario} />} />
              <Route path="/empresaCrear" render={() => <AgregarOferta guardar={guardaOferta} id={usuario.idEmpresa} />} />
            </Switch>

          </BrowserRouter>
          <Footer />
        </div>
      );
      break;
    case 3:
      /* ------------- MENTOR ------------------- */

      return (
        <div>
          <BrowserRouter>

            <NavegacionMentor nombre={usuario.name} logout={logout} />

            <Switch>

              <Route exact path="/" render={() => <Mentor />} />
              <Route path="/info" render={() => <Info />} />
              <Route path="/gestion" render={() => <Gestion ofertas={ofertas} update={update} usuario={usuario} borrarOferta={borrarOferta} />} />
              <Route path="/activas" render={() => <Activas ofertas={ofertasMentor} borrarUsuario={borrarUsuarioOferta} finalizar={finalizar} />} />
              <Route path="/perfilUsuario" render={() => <PerfilUsuario usuario={usuario} />} />

            </Switch>

          </BrowserRouter>
          <Footer />
        </div>
      );
      break;
    default:
      {/* ------------- INICIO ------------------- */ }
      return (
        <div className="App" onWheel={roda}>
          <BrowserRouter>

            <Route path="/" render={() => pujo ? <Navegacion fixa login={login} /> : <Navegacion login={login} />} />

            <Switch>

              <Route exact path="/" render={() => <Inicio ofertas={ofertas} />} />
              <Route path="/login" component={ModalLogin} />
              <Route path="/registroUsuario" render={() => <RegistroUsuario />} />
              <Route path="/registroEmpresa" render={() => <RegistroEmpresa />} />
              <Route path="/info" render={() => <Info />} />
            </Switch>

          </BrowserRouter>
          <Footer />
        </div>
      );
      break;

  }

}

export default App;