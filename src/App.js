// Añadimos React & nuestro archivo de configuración
import React, { Component } from 'react';
import DesignerNavbar from './DesignerNavbar';

class App extends Component {
  render() { 
    return (
    <div className="App">
      <header className="App-header">
      <DesignerNavbar></DesignerNavbar>
      </header>
    </div>
  );
}
}

export default App;
