import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
class Acerca extends Component {
  render() {
    return (
      <Container>
        <Card className="bg-dark text-white">
          <Card.Img src="images/vuejs.jpg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Programacion Vue JS</Card.Title>
            <Card.Text>
              <h3>¿Qué es VueJS?</h3><br></br>
              Vue JS como su nombre indica es un framework javascript, es decir, es un conjunto de herramientas y funciones que permiten desarrollar páginas web de una manera más cómoda. Vue nace con la necesidad de no tener que escribir tanto código javascript y sobre todo con la idea de ahorrar tiempo al programador.<br></br>

              Vue fue creado por Evan You, ex-trabajador de Google, que decidió crear su propio framework en el año 2014. Desde entonces, Vue ha subido muchísimo de popularidad, gracias a su sencillez y a todo lo que puede ofrecer, que lo vamos a ver a continuación.<br></br><br></br>

              <h3>¿Para qué sirve VueJS?</h3><br></br>
              Respuesta corta: Para crear páginas web completas.<br></br>

              Respuesta larga: VueJS es una librería javascript pensada para tener un framework con el que desarrollar páginas web. Con Vue puedes crear todas las vistas de tu página web, puedes hacerlas dinámicas, puedes conectarla a un servidor para tener datos dinámicos de una base de datos, etc.<br></br>

              Con Vue puedes hacer desde páginas básicas a cosas más complejas. En ocasiones se compara Vue con JQuery, pero Vue más allá. JQuery está pensado para ahorrar código javascript pero no para hacer páginas web completas (se pueden hacer pero tienes que invertir mucho tiempo). Con Vue ya no vas a necesitar Jquery y tampoco vas a necesitar otras librerías javascript.<br></br>

              En definitiva, Vue es un framework completo pensado para los programadores web, con buena curva de aprendizaje y que se puede usar en todo tipo de webs.<br></br>

            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src="images/react.png" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Programacion React JS</Card.Title>
            <Card.Text>

              <h3>React.js es una librería JavaScript desarrollada por Facebook. ¿Para qué nos sirve y cómo funciona?</h3><br></br>

              React es una biblioteca escrita en JavaScript, desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario. Se utiliza en Facebook para la producción de componentes, e Instagram está escrito enteramente en React. Uno de sus puntos más destacados, es que no sólo se utiliza en el lado del cliente, sino que también se puede representar en el servidor, y trabajar juntos.<br></br>

              <h3>¿Cómo funciona React?</h3><br></br>

              React.js está construido en torno a hacer funciones, que toman las actualizaciones de estado de la página y que se traduzcan en una representación virtual de la página resultante. Siempre que React es informado de un cambio de estado, vuelve a ejecutar esas funciones para determinar una nueva representación virtual de la página, a continuación, se traduce automáticamente ese resultado en los cambios del DOM necesarios para reflejar la nueva presentación de la página.<br></br>

              A primera vista, esto suena como que fuera más lento que el enfoque JavaScript habitual de actualización de cada elemento, según sea necesario. Detrás de escena, sin embargo, React.js hace justamente eso: tiene un algoritmo muy eficiente para determinar las diferencias entre la representación virtual de la página actual y la nueva. A partir de esas diferencias, hace el conjunto mínimo de cambios necesarios en el DOM.<br></br>

              Pues utiliza un concepto llamado el DOM virtual que hace selectivamente sub-árboles de los nodos sobre la base de cambios de estado, desarrollando esto, con la menor cantidad de manipulación DOM posible, con el fin de mantener los componentes actualizados, estructurando sus datos.<br></br>

              <h3>¿Cómo funciona el DOM virtual?</h3><br></br>

              Imagina que tienes un objeto que es un modeló en torno a una persona. Tienes todas las propiedades relevantes de una persona que podría tener, y refleja el estado actual de la persona. Esto es básicamente lo que React hace con el DOM.<br></br>

              Ahora piensa, si tomamos ese objeto y le hacemos algunos cambios. Se ha añadido un bigote, unos bíceps y otros cambios. En React, cuando aplicamos estos cambios, dos cosas ocurren:<br></br>

              - En primer lugar, React ejecuta un algoritmo de "diffing", que identifica lo que ha cambiado.<br></br>

              - El segundo paso es la reconciliación, donde se actualiza el DOM con los resultados de diff.<br></br>

              La que hace React, ante estos cambios, en lugar de tomar a la persona real y reconstruirla desde cero, sólo cambiaría la cara y los brazos. Esto significa que si usted tenía el texto en una entrada y un actualización se llevó a cabo, siempre y cuando nodo padre de la entrada no estaba programado para la actualización, el texto se quedaría sin ser cambiado.<br></br>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src="images/laravel.jpeg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Programacion Laravel</Card.Title>
            <Card.Text>
              <h3>¿Que es laravel y para que sirve?</h3>

              Laravel es un popular framework de PHP. Permite el desarrollo de aplicaciones web totalmente personalizadas de elevada calidad.<br></br>

              Laravel es un framework PHP. Es uno de los frameworks más utilizados y de mayor comunidad en el mundo de Internet.<br></br>

              Como framework resulta bastante moderno y ofrece muchas utilidades potentes a los desarrolladores, que permiten agilizar el desarrollo de las aplicaciones web.<br></br>

              Laravel pone énfasis en la calidad del código, la facilidad de mantenimiento y escalabilidad, lo que permite realizar proyectos desde pequeños a grandes o muy grandes. Además permite y facilita el trabajo en equipo y promueve las mejores prácticas.<br></br>
             </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    );
  }
}

export default Acerca;