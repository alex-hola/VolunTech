
const API = 'http://localhost:8080/voluntech';
const HOST = 'localhost'

const HEADERS = new Headers(
    {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Host': HOST,

    });

//------------------pseudo LOGIN ----------------------

//Devuelve los datos del usuario y el tipo de usuario (typeOfUser)
async function getUser(credenciales) {
    const opcionesFetch = {
        method: "GET",
        charset: "utf-8",
        headers: HEADERS
    };

    const response = await fetch(
        API + "/GetCurrentUser?email=" + credenciales.email + "&pass=" + credenciales.password, opcionesFetch);
    if (response.ok) {
        const resp = await response.json();
        return resp;
    } else {
        return [];
    }
}

//------------------CRUD Ofertas-----------------

//devuelve todas las ofertas 
async function getOfertas() {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS
    };

    const response = await fetch(API + "/getOfertas", opcionesFetch);
    if (response.ok) {
        const resp = await response.json();
        return resp;
    } else {
        return [];
    }
}

//devuelve todas las ofertas validadas (para los usuarios)
//oferta validada = oferta con un mentor asignado
async function getOfertasValidadas() {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS
    };

    const response = await fetch(API + "/GetOfertasValidadas", opcionesFetch);
    if (response.ok) {
        const resp = await response.json();
        return resp;
    } else {
        return [];
    }
}

// devuelve las ofertas donde un usuario está inscrito
async function getOfertasUsuario(idVoluntario) {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS
    };

    const response = await fetch(API + "/GetOfertasUsuario?id=" + idVoluntario, opcionesFetch);
    if (response.ok) {
        const resp = await response.json();
        return resp;
    } else {
        return [];
    }
}

// devuelve las ofertas del mentor
async function getOfertasMentor(idMentor) {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS
    };

    const response = await fetch(API + "/GetOfertasMentor?id=" + idMentor, opcionesFetch);
    if (response.ok) {
        const resp = await response.json();
        return resp;
    } else {
        return [];
    }
}

// devuelve las ofertas de una empresa
async function getOfertasEmpresa(idEmpresa) {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS
    };

    const response = await fetch(API + "/GetOfertasEmpresa?id=" + idEmpresa, opcionesFetch);
    if (response.ok) {
        const resp = await response.json();
        return resp;
    } else {
        return [];
    }
}

// devuelve usuarios de una oferta
async function getUsuarioEnOferta(idOferta) {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS
    };

    const response = await fetch(API + "/GetUsuarioEnOferta?id=" + idOferta, opcionesFetch);
    if (response.ok) {
        const resp = await response.json();
        return resp;
    } else {
        return [];
    }
}

// devuelve el mentor de una oferta
async function getMentor(idOferta) {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS
    };

    const response = await fetch(API + "/GetMentor?id=" + idOferta, opcionesFetch);
    if (response.ok) {
        const resp = await response.json();
        return resp;
    } else {
        return [];
    }
}

// devuelve la empresa de una oferta
async function getEmpresa(idOferta) {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS
    };

    const response = await fetch(API + "/GetEmpresa?id=" + idOferta, opcionesFetch);
    if (response.ok) {
        const resp = await response.json();
        return resp;
    } else {
        return [];
    }
}

// // ----------------- ADD OFERTA  ----------------------

//guarda una oferta que ha generado una empresa
async function guardar(oferta) {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS,
    };

    const response = await fetch(API + "/PutInsertOfertas?id=" + oferta[0] + "&t=" + oferta[1] + "&d=" + oferta[2], opcionesFetch);

    return response.ok; // true/false

}

// // ----------------- UPDATE OFERTA ----------------------

// actualiza una oferta que ha rellenado un mentor
async function update(oferta) {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS
    };
    console.log(oferta);
    const response = await fetch(API + "/ModificaOferta?id="
        + oferta.id + "&t="
        + oferta.nombre + "&d="
        + oferta.descripcion + "&mentor="
        + oferta.idUser, opcionesFetch);

    return response.ok; // true/false

}

//cambia la oferta a validada
async function setValidacion(datos) {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS
    };
    console.log(datos.id + " " + datos.idMentor);
    const response = await fetch(API + "/SetValidacion?ido=" + datos.id + "&idm=" + datos.idMentor, opcionesFetch);

    return response.ok; // true/false

}

//cambia la oferta a terminada
async function setTermino(idOferta) {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS
    };

    const response = await fetch(API + "/SetTermino?id=" + idOferta, opcionesFetch);

    return response.ok; // true/false

}

//asigna un usuario voluntario a una oferta
async function setUserOferta(datos) {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS
    };

    const response = await fetch(API + "/SetUserIntoOfertas?idV=" + datos[0] + "&idO=" + datos[1], opcionesFetch);

    return response.ok; // true/false

}

//borra a un usuario voluntario de una oferta
async function removeUserOferta(datos) {

    const opcionesFetch = {
        method: "GET",
        headers: HEADERS,
    };
    console.log(datos);
    const response = await fetch(API + "/DeleteUserOferta?idO=" + datos.idOferta + "&idV=" + datos.idVoluntario, opcionesFetch);

    return response.ok; // true/false

}

//borra una oferta junto con usuarios asignados
async function removeOferta(oferta) {
    const opcionesFetch = {
        method: "GET",
        headers: HEADERS,
    };
    const response = await fetch(API + "/DeleteOferta?idO=" + oferta, opcionesFetch);

    return response.ok; // true/false

}


// // --------------------- REMOVE OFERTA ------------------------
//------------------no esta hecha --------------------------------
// borra una oferta
//  async function remove(idOferta){

//     const opcionesFetch =  {
//         method: "DELETE",
//         headers: HEADERS,
//     };

//     const response = await fetch(API+"/"+idOferta, opcionesFetch);

//     return response.ok; // true/false

//  }

const Crud = {
    getOfertas, getUser, getOfertasValidadas, getOfertasEmpresa, getOfertasMentor, getOfertasUsuario, guardar, update,
    setValidacion, setTermino, getUsuarioEnOferta, getMentor, getEmpresa, setUserOferta, removeUserOferta, removeOferta
};

export default Crud;

