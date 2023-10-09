import './App.css';
import Boton from './componentes/Boton';
import logoapp from './imagenes/logo.png';

function App() {

  const manejarCLic = () => {
    console.log("Clic");
  }

  const reiniciarContador = () => {
    console.log("Reiniciar");
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={logoapp} alt = 'Logo'/>
      </div>
      <div className='contenedor-principal'>
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarCLic}/>
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={manejarCLic}/>
      </div>
      
    </div>
  );
}

export default App;
