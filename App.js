import logo from './logo.svg';
import './App.css';
import { Button } from './components';
import { Message } from './components'
function App() {
  return (
    <div className="App">
      <Button>

      </Button>
      <Button disabled />
      <Button onClick={() => {
        console.log('click')}
        
      } />
      <Message
      msgProps={'Another random msg'}>
      </Message>
    </div>
  );
}

export default App;
