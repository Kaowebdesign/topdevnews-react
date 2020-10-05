import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import AsideNav from './components/AsideNav';
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
import './assets/scss/style.scss';

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

const App = (props) => {

  useEffect(() => {
    //get categories
    props.onGetCategories();
    //get all posts
    props.getPosts();
  },[]);

  const [showAside, setShowAside] = useState(false);

  const openAside = () => {
    setShowAside(true);
  };

  const closeAside = () => {
    setShowAside(false);
  };

  const siteTitle = "Top Developer News";

  return (
    <>
      <ConnectedRouter history={props.history} >
        <Header siteTitle={siteTitle} categories={props.categories} onOpenAside={openAside}/>
        <AsideNav categories={props.categories} showAside={showAside} onOpenAside={openAside} onCloseAside={closeAside} />
        { routes }
        <Footer siteTitle={siteTitle} />
      </ConnectedRouter>
    </>
  )

};



App.propTypes = {
  history: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
