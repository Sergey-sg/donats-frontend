import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JarDetail from "./pages/JarDetail";
import { Container } from "react-bootstrap";


function App() {
  return (
    <Container className="min-vh-100 vstack bg-super-light-blue mx-auto p-0">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"jar-detail/:jarId"} element={<JarDetail />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;