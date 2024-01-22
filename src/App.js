import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import { Posts } from './features/post/Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          RTK example
        </p>
        <Counter/>
        <Posts/>
      </header>
    </div>
  );
}

export default App;
