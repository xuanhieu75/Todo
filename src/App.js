import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import Table from "./Tables/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={logo} className="App-logo" alt="logo"></img>
      <p>Hi! This is list Todo</p>
      <ListTodo></ListTodo>
      <p>Hi! This is list Table Covid</p>
      <Table></Table>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
