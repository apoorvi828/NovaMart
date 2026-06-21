import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Routes, Route, Link} from "react-router-dom";
import Login from "./Pages/Login";
import Cards from './Components/ProductCard'
import ProductDetails from "./Pages/ProductDetails";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />

      {/* Hero Section */}
      <section
        style={{
          background: "#0F766E",
          color: "white",
          textAlign: "center",
          padding: "10px 100px",
        }}
      >
      </section>
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Products/:id"element={<ProductDetails />} />
        {/* <Route path="/card" element={<Card />} /> */}

      </Routes>

      <Footer />
    </>
  );
}

