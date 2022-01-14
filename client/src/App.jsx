import Home from "./pages/Home"
import ProductList from "./pages/Shop";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Project from "./pages/Project";
import AddProject from "./pages/addProject";
import Admin from "./pages/Admin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/shop" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/project/:id" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/addProject" element={<AddProject/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  );
};

export default App;