import './App.css';

/* Icons */
import arrowBack from './assets/icons/left-arrow.svg'
import noun_notification from './assets/icons/noun_notification.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img width="14px" color="white" src={arrowBack} alt="arrowBack" />
        <h1>Tasks</h1>
        <img src={noun_notification} alt="campaign" />
      </header>
      <div className="App-button">
        <button className="button">CREATE +</button>
      </div>
    </div>
  );
}

export default App;
