import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import ProtectedRoute from "./components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Necklace from "./Pages/Necklace";
import Ring from "./Pages/Ring";
import Bracelet from "./Pages/Bracelet";
import Earrings from "./Pages/Earrings";
import Bangles from "./Pages/Bangles"
import AnkletsFeets from "./Pages/AnkletsFeets";
import Hair from"./Pages/Hair";
import Nose from"./Pages/Nose";
import HandWaist from "./Pages/HandWaist";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import OrderSuccess from "./Pages/OrderSuccess";
import AdminOrders from "./Pages/AdminOrders";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminProducts from "./Pages/AdminProducts";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MyOrders from "./Pages/MyOrders";
import Wishlist from "./Pages/Wishlist";
import Products from "./Pages/Products";
import AdminRoute from "./components/AdminRoute";



function App() {
  return (
    <>
      {<Navbar /> }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      
        <Route path="/necklace" element={<Necklace />} />
        <Route path="/ring" element={<Ring />} />
        <Route path="/bracelet" element={<Bracelet />}/>
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/bangles" element={<Bangles/>}/>
        <Route path="/ankletsFeets" element={<AnkletsFeets/>}/>
        <Route path="/hair" element={<Hair/>}/>
        <Route path="/nose" element={<Nose/>}/>
        <Route path="/handwaist" element={<HandWaist/>}/>

        <Route path="/product/:id" element={<ProductDetails />}/>
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/checkout" element={<ProtectedRoute> <Checkout /></ProtectedRoute> }/>
     
        <Route
  path="/order-success/:id" element={ <ProtectedRoute>   <OrderSuccess />  </ProtectedRoute> }/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-orders"element={ <ProtectedRoute>    <MyOrders />   </ProtectedRoute> }/>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={   <AdminRoute>     <AdminDashboard />   </AdminRoute> }/>

<Route path="/admin/orders" element={   <AdminRoute>     <AdminOrders />   </AdminRoute> }/>

<Route path="/admin/products"element={   <AdminRoute>     <AdminProducts />    </AdminRoute> }/>
        </Routes>
 </>  
  );
}

export default App;
