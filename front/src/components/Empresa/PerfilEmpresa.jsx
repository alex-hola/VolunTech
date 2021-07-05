import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const PerfilEmpresa = (props) => {

  //--------------- POR HACER ------------------------

  return (

    <Container fluid="md">
      <div className="separador2"></div>
      <div className="tituloFormulario">
        <h1 className="robot">Perfil de {props.usuario.nombreEmpresa}</h1>
      </div>
      <Form className="cajaInferior">
        <Row>
          <Col>
            <h2>Datos de acceso</h2>
            <FormGroup >
              <Label for="email">Email</Label>
              <Input type="email" name="email" placeholder={props.usuario.email} id="email" />
            </FormGroup>

            <FormGroup >
              <Label for="password">Password</Label>
              <Input type="password" name="password" placeholder="****" id="password" />
            </FormGroup>

            <FormGroup >
              <Label for="nameEmpresa">Tu nombre</Label>
              <Input type="text" name="nameEmpresa" placeholder={props.usuario.name} id="nameEmpresa" />
            </FormGroup>

            <FormGroup >
              <Label for="surnameEmpresa">Tu apellido</Label>
              <Input type="text" name="nameEmpresa" placeholder={props.usuario.surname} id="nameEmpresa" />
            </FormGroup>
          </Col>

          <Col>
            <h2>Datos de tu organización</h2>
            <FormGroup >
              <Label for="nombreEmpresa">Nombre de empresa</Label>
              <Input type="text" name="nombreEmpresa" placeholder={props.usuario.nombreEmpresa} id="nombreEmpresa" />
            </FormGroup>

            <FormGroup >
              <Label for="nombre">Telefono de contacto</Label>
              <Input type="text" name="telefono" placeholder={props.usuario.phone} id="telefono" />
            </FormGroup>

            <FormGroup >
              <Label for="idFiscal">Identificación fiscal</Label>
              <Input type="text" name="idFiscal" placeholder={props.usuario.identificacionFiscal} id="idFiscal" />
            </FormGroup>

            <FormGroup>
              <Label for="descripcion">Descripcion</Label>
              <Input type="textarea" name="descripcion" id="descripcion" />
            </FormGroup>

            <FormGroup>
              <Label for="exampleFile">Subir foto de perfil</Label>
              <Input type="file" name="file" id="exampleFile" />
            </FormGroup>

            <Button type="submit" color="info">
              <Link to="/">Actualizar</Link>
            </Button>{" "}
            <Button type="button" color="warning">
              <Link to="/">Cancelar</Link>
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default PerfilEmpresa;