import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import Table from "./Tables/Table";
import Nav from "./Nav/Nav";
import Blog from "./Blog/Blog";
import DetailBlog from "./Blog/DetailBlog";
import AddBlog from "./Blog/AddBlog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <Nav></Nav>
      </header>
      <img src={logo} className="App-logo" alt="logo"></img>

      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/todo" element={<ListTodo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<DetailBlog />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/about" element={<ListTodo />} />
      </Routes>

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
