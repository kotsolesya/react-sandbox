import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Header from "./components/header";
import Footer from "./components/footer";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Header />
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <Footer />
  </div>
);

render(<App />, document.getElementById("root"));
