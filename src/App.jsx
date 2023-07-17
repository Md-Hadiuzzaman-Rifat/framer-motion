import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Home from "./components/Home";
import Base from "./components/Base";
import Order from "./components/Order";
import Toppings from "./components/Toppings";
import Layout from "./components/Layout";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Layout> 
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/base" element={<Base />}></Route>
          <Route path="/toppings" element={<Toppings />}></Route>
          <Route path="/order" element={<Order />}></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
