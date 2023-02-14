import './App.css';
import Board from './Board';
import Header from './Header';
// import Square from './Square';

function App() {
  return (
    <div>
      <Header/>
      <Board className ="app" />
    </div>
  );
}

export default App;
