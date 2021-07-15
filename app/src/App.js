import React, { useEffect }from 'react';
import './App.css';
import { connect } from "react-redux";
import {test} from './actions/index'


class App extends React.Component {
  componentDidMount(){
      this.props.test()
    
  }
  render(){
    
  return (<h1>Eric</h1>)
  }
}


const mapStateToProps = state => {
  return {
    testing: state.testing
  };
};

const AppContainer = connect(
  mapStateToProps,
  {test}
)(App);
export default AppContainer;