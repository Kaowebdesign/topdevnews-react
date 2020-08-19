import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes';
import Header from './components/Header';
import {connect} from 'react-redux';
import { getCategories } from './actions/category';
import { getPost } from './actions/post';
import {
  MAIN_POST_TYPE_ID,
  TOP_POST_TYPE_ID,
  STANDART_POST_TYPE_ID,
  RECOMEND_POST_TYPE_ID,
  NOVELTY_POST_TYPE_ID
} from './constants/api';
import './assets/css/main.css';

const mapStateToProps = state => {
  
  let {categories} = state.category;

  return {categories}
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCategories:() => {
      dispatch(getCategories());
    },
    getPosts:() => {
      dispatch(getPost([STANDART_POST_TYPE_ID,MAIN_POST_TYPE_ID,TOP_POST_TYPE_ID,RECOMEND_POST_TYPE_ID,NOVELTY_POST_TYPE_ID]));
    }
  }
};

class App extends Component {

  componentDidMount(){
    //get categories
    this.props.onGetCategories();
    //get all posts
    this.props.getPosts();
    console.log('render App');
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
