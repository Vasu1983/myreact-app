import logo from './logo.svg';
import './App.css';
import Login from './Login'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Vasu
        </a>
        <img src={logo} className="App-logo" alt="logo" height="150" width="150"/>
      </header>
      <Login />
    </div>
  );
}

export default App;
