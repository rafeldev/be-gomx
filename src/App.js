import './App.css';

/* Icons */
import arrowBack from './assets/icons/left-arrow.svg'
import noun_notification from './assets/icons/noun_notification.png'

/* Components */
import Task from './components/Task'
import Statistics from './components/Statistics';

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
      <nav className="App-nav">
        <span><a className="active" href="googl.com">All</a></span>
        <span><a href="/">In progress</a></span>
        <span><a href="/">Started</a></span>
        <span><a href="/">Completed</a></span>
      </nav>
      <div className="Task-title">
        <h3>Upcoming tasks</h3>
        <p>5</p>
      </div>

      <Task />
      <Statistics />
      
    </div>
  );
}

export default App;
