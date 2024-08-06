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
      <div style={{ 
          backgroundColor: '#f2f2f2',
          margin: 0,
          padding: 0,
          position: 'absolute',
          top: '68%',
          /* center left */
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
          width: 200,
          height: 100,
          /* make rounded corneres */
          borderRadius: 4,
        }}>
        <DropZone />
      </div>
    </div>
  );
}

export default App;
