import Topbar from "./components/Topbar";
import styled from 'styled-components';
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Router>
      <>
        <Topbar />
        <Container>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/users" element={<UserList/>}/>
            <Route path="/user/:id" element={<User/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/product/:id" element={<Product/>}/>
          </Routes>
        </Container>
      </>
    </Router>
  );
}

export default App;
