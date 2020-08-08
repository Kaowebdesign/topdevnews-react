import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes';
import Header from './components/Header';
import {connect} from 'react-redux';
import { getCategories } from './actions/category';
import './App.css';

const mapStateToProps = state => {
  
  let {categories} = state.category;

  return {categories}
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCategories:() => {
      dispatch(getCategories());
    }
  }
};

class App extends Component {

  componentDidMount(){
    this.props.onGetCategories();
  }
  
  render(){
    return (
      <div>
        <ConnectedRouter history={this.props.history}>
          <Header siteTitle="Top Developer News" categories={this.props.categories} />
          { routes }
        </ConnectedRouter>
      </div>
    )
  }

}



App.propTypes = {
  history: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
