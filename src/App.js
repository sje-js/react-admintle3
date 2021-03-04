import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Footer from "./components/footer";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <Content />
      <Footer />
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
    </div>
  );
}

export default App;
