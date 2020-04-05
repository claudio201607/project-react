import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup } from 'react-bootstrap'
class Home extends Component {
  render() {
    return (
<CardGroup>
  <Card>
    <Card.Img variant="top" src="images/web.jpeg" />
    <Card.Body>
      <Card.Title>Plataforma web</Card.Title>
      <Card.Text>
      Desarrollo de infraestructura web con tecnologia avanzada y soluciones inteligentes para satisfacer tus necesidades.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">www.artistichat.com</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="images/software.png" />
    <Card.Body>
      <Card.Title>Plataforma de Software</Card.Title>
      <Card.Text>
      Desarrollo de soluciones Informaticas avanzadas capaces de lograr tu solucion deseada para avanzar hacia tu software deseado.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">www.artistichat.com</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="images/soporte.jpg" />
    <Card.Body>
      <Card.Title>Soporte Informatico</Card.Title>
      <Card.Text>
      Soporte remoto de todas tus dudas y mejoramiento de tus soluciones Informaticas, actualizaciones de software y plataformas web.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">www.artistichat.com</small>
    </Card.Footer>
  </Card>
</CardGroup>
    );
  }
}
 
export default Home;