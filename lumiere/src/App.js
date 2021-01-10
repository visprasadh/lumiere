import "./App.sass";
import React, { Component } from "react";
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import { Scrollbars } from "react-custom-scrollbars";
class App extends Component {
  state = {
    theme: "light",
  };
  render() {
    return (
      <div>
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} style={{ width: "100%", height: "100vh" }}>
          <div className="App">
            <Article />
          </div>
        </Scrollbars>
      </div>
    );
  }
}

export default App;
