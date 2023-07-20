import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CatalogMenu from "./components/CatalogMenu/CatalogMenu";
import OralPreporations from "./Pages/OralPreparations/OralPreparations";
import Injectables from "./Pages/Injectables/Injectables";
import Prepations from "./Pages/Preparations/Preparations";
import Hormone from "./Pages/Hormone/Hormone";
import Sarms from "./Pages/Sarms/Sarms";
import Zakaz from "./components/Zakaz/Zakaz";
import Oplata from "./components/Oplata/Oplata";
import Dostavka from "./components/Dostavka/Dostavka";
import Obmen from "./components/Obmen/Obmen";
import Otziv from "./components/Otziv/Otziv";
import Sale from "./components/Sale/Sale";
import Novost from "./components/Novost/Novost";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Addings from "./components/Addings/Addings"
import Korzina from "./components/Korzina/Korzina"
import Adres from "./components/Adres/Adres"
import Ready from "./components/Ready/Ready"
import Error from "./components/Error/Error"
// import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <CatalogMenu />
        <Routes>
          <Route path="/" element={<Home />} />


          <Route path="/OralPreparations" element={<OralPreporations />} />
          <Route path="/Injectables" element={<Injectables />} />
          <Route path="/Prepations" element={<Prepations />} />
          <Route path="/Hormone" element={<Hormone />} />
          <Route path="/Sarms" element={<Sarms />} />
          <Route path="/zakaz" element={<Zakaz />} />
          <Route path="/oplata" element={<Oplata />} />
          <Route path="/dostavka" element={<Dostavka />} />
          <Route path="/obmen" element={<Obmen />} />
          <Route path="/otziv" element={<Otziv />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/novost" element={<Novost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/addings" element={<Addings />} />
          <Route path="/korzina" element={<Korzina />} />
          <Route path="/adres" element={<Adres />} />
          <Route path="/ready" element={<Ready />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
