import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const RegistroUsuario = (props) => {

  const cancelar = () => {

  }

  //--------------- POR HACER ------------------------

  return (

    <Container fluid="md">
      <div className="separador2"></div>
      <div className="tituloFormulario verde">

        <h1>Accede como voluntario</h1>
        <h3 className="robot">Regístrate en VolunTech</h3>

      </div>
      <Form className="cajaInferior">
        <Row>
          <Col>

            <FormGroup >
              <Label for="nombre">Nombre</Label>
              <Input type="text" name="nombre" id="nombre" />
            </FormGroup>

            <FormGroup >
              <Label for="apellidos">Apellidos</Label>
              <Input type="text" name="apellidos" id="apellidos" />
            </FormGroup>

            <FormGroup >
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>

            <FormGroup >
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" />
            </FormGroup>

          </Col>

          <Col>

            <FormGroup >
              <Label for="telefonoUsuario">Telefono</Label>
              <Input type="text" name="telefonoUsuario" id="telefonoUsuario" />
            </FormGroup>

            <FormGroup>
              <Label for="birthdate">Fecha de nacimiento</Label>
              <Input
                type="date"
                name="birthdate"
                id="birthdate" />
            </FormGroup>

            <FormGroup>
              <Label for="descripcion">Descripcion</Label>
              <Input type="textarea" name="descripcion" id="descripcion" />
            </FormGroup>

            <FormGroup>
              <Label for="exampleFile">Subir foto de perfil</Label>
              <Input type="file" name="file" id="exampleFile" />
            </FormGroup>

            <FormGroup tag="fieldset">
              <legend>Tipo de usuario</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Usuario voluntario
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Usuario mentor
                </Label>
              </FormGroup>

            </FormGroup>

            <Button type="submit" color="success">
              <Link to="/usuario">Guardar</Link>
            </Button>{" "}
            <Button type="button" onClick={cancelar} color="warning">
              Cancelar
            </Button>

          </Col>

        </Row>
      </Form>
    </Container>
  );
}

export default RegistroUsuario;