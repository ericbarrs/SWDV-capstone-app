import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Routes } from "./routes";
import NavBar from "./components/Navbar";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;
