import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap'
class Acerca extends Component {
  render() {
    return (
      <Container fluid>
        <Card>
          <Card.Header>Acerca De</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <h3>¿Quiénes somos y a qué nos dedicamos?</h3>
              <p>- programadores informaticos, nos dedicamos a resolver toda clase de problemas basados en tecnologia que podemos manejar con nuestros lenaguajes de programacion.</p>
              <hr></hr>
              <h3>¿Quiénes forman parte de esta empresa?</h3>
              <p>los que forman parte de este equipo es claudio cortez si deseas ser parte de este equipo enviame una solicitud en el formulario de contacto.</p>
              <hr></hr>
              <h3>¿Qué ofrecemos a nuestros clientes?</h3>
              <p>las mejores soluciones proyectos web, de desarrollo de software, administracion de base de datos etc..</p>
              <hr></hr>
              <h3>¿Qué nos hace diferente de otros competidores?</h3>
              <p>la capacidad de resolver tus problemas y ser capaces de ordenar todas tus dudas basado en nuestro desarrollo de aplicaciones con una interfaces amigable para tu empresa.</p>
              <hr></hr>
              <h3>¿Por qué los clientes potenciales deben confiar en nosotros?</h3>
              <p>por que ofrecemos las mejores soluciones informaticas adapatadas a tus estilos e ideas.</p>
              <hr></hr>
              <h3>¿Qué soluciones les puedes ofrecer?</h3>
              <p>soluciones web asp.net, php7, laravel 5.5, html5, bootstrap 4, css3, Jquery, Ajax, Javascript, c#, .NET, Java, JAVA EE, etc...</p>
              <footer className="blockquote-footer">
                www.artistichat.com <cite title="Source Title">artistichat.com</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

      </Container>
    );
  }
}

export default Acerca;