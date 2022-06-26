import React from "react";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Create from "./components/Create";
import Posts from "./components/Posts";

function App() {
  return (
    <Provider store={store}>
      <Create />
      <Posts />
    </Provider>
  );
}

export default App;
