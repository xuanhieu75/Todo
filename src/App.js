import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./Todos/ListTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={logo} className="App-logo" alt="logo"></img>
      <p>Hi! This is list</p>
      <ListTodo></ListTodo>
    </div>
  );
}

export default App;
