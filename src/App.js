import logo from './logo.svg';
import './App.css';
import DropZone from './DropZone';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div style={{ backgroundColor: 'red', margin: 0, padding: 0, position: 'absolute', top: '68%', left: '45%', width: 100, height: 100 }}>
        <DropZone />
      </div>
    </div>
  );
}

export default App;
