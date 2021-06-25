import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Teste from './componentes/Teste';
import Apresentacao from './componentes/Apresentacao';

function App() {
  return (
    <div className="App">
      <Teste />
      <Apresentacao />
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Nill Yohan Da Cruz Martins
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
      </header>
    </div>
  );
}

export default App;