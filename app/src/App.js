import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Routes } from "./routes";
import NavBar from "./components/Navbar";
import { getAuth } from "./actions/login";

class App extends React.Component {
  componentDidMount() {
    this.props.getAuth();
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
    user: state.user,
  };
};

const AppContainer = connect(mapStateToProps, { getAuth })(App);
export default AppContainer;
