import './App.css';
import ListTasks from './components/ListTasks';
import Logo from "./components/Logo";



function App() {



  return (
    <div className="App-task">
      <Logo/>
      <div className='task-list-principal'>
        <h1>My Tasks</h1>
        <ListTasks />
      </div>
    </div>

  );
}

export default App;
