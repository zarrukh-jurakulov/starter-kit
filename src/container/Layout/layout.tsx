import React from "react";
import Content from "../Content/content";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import { BrowserRouter as Router } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Content />
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
