import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes';
import Header from './components/Header';
import {connect} from 'react-redux';
import { getCategories } from './actions/category';
import './App.css'

const mapDispatchToProps = dispatch => {
  return {
    onGetCategories:() => {
      dispatch(getCategories());
    }
  }
}

class App extends Component {
  render(){
    return (
      <div>
        <ConnectedRouter history={this.props.history}>
          <Header siteTitle="Top Dev News"/>
          <button onClick={this.props.onGetCategories}>Get categories</button>
          { routes }
        </ConnectedRouter>
      </div>
    )
  }

}



App.propTypes = {
  history: PropTypes.object,
}

export default connect(null, mapDispatchToProps)(App);
