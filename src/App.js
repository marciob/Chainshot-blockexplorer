import logo from './logo.svg';
import './App.css';
import BlockExplorer from './components/BlockExplorer';
import BlockTables from './components/BlockTables';

function App() {
  return (
    <div className="App">
      <BlockExplorer />
      <BlockTables />
    </div>
  );
}

export default App;
