import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const PerfilUsuario = (props) => {

  //--------------- POR HACER ------------------------

  return (

    <Container fluid="md">
      <div className="separador2"></div>
      <div className="tituloFormulario verde">

        <h1 className="robot">Perfil de {props.usuario.name}</h1>


      </div>
      <Form className="cajaInferior">
        <Row>
          <Col>

            <FormGroup >
              <Label for="nombre">Nombre</Label>
              <Input type="text" name="nombre" id="nombre" placeholder={props.usuario.name} disabled="true"/>
            </FormGroup>

            <FormGroup >
              <Label for="apellidos">Apellidos</Label>
              <Input type="text" name="apellidos" id="apellidos" placeholder={props.usuario.surname} disabled="true" />
            </FormGroup>



            <FormGroup >
              <Label for="email">Email</Label>
              <Input type="email" name="email" placeholder={props.usuario.email} id="email" />
            </FormGroup>


            <FormGroup >
              <Label for="password">Password</Label>
              <Input type="password" name="password" placeholder="****" id="password" />
            </FormGroup>

          </Col>
          <Col>

            <FormGroup >
              <Label for="telefonoUsuario">Telefono</Label>
              <Input type="text" name="telefonoUsuario" placeholder={props.usuario.phone} id="telefonoUsuario" />
            </FormGroup>

            <FormGroup>
              <Label for="birthdate">Fecha de nacimiento</Label>
              <Input
                type="date"
                name="birthdate"
                id="birthdate"

              />
            </FormGroup>

            <FormGroup>
              <Label for="descripcion">Descripcion</Label>
              <Input type="textarea" name="descripcion" id="descripcion" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Subir foto de perfil</Label>
              <Input type="file" name="file" id="exampleFile" />

            </FormGroup>

            <Button type="submit" color="success">
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

export default PerfilUsuario;