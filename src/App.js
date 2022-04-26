import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { InputCounter } from './components/InputValues';

function App() {
  return (
    <div className="App">
      <InputCounter/>
      {/* <Counter/> */}
    </div>
  );
}

export default App;
