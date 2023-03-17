import logo from './logo.svg';
import './App.css';
import Whiteboard from './Whiteboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <div class="container">
          <h1>Excalidraw Embed Example</h1>
          <div id="Whiteboard"></div>
        </div> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h3>This is end of header</h3>
      <Whiteboard />
    </div>
  );
}

export default App;
