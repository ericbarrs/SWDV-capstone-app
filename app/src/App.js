import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { test } from "./actions/index";
import { Routes } from "./routes";
import { NavBar } from "./components/Navbar";

class App extends React.Component {
  componentDidMount() {
    this.props.test();
  }

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
    testing: state.testing,
    auth: state.auth,
  };
};

const AppContainer = connect(mapStateToProps, { test })(App);
export default AppContainer;
