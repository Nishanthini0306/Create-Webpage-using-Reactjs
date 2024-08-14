import React from "react";
import ReactDOM from "react-dom";
import'./App.css';
import'./header.css';
import'./footer.css';
import App from "./App.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
const Welcome=(
  <div>
    <Header/>
    <App/>
    <Footer/>
    </div>
);
ReactDOM.render(Welcome,document.getElementById("root"));
