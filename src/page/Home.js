import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getPost } from '../actions/post';
import {
  MAIN_POST_TYPE_ID,
  TOP_POST_TYPE_ID
} from '../constants/api';
import AsideNav from '../components/AsideNav';
import MainPost from '../components/MainPost';
import '../assets/css/home.css';

const mapStateTopProps = state => {

  let {mainPosts} = state.post;
  let {categories} = state.category;

  return {mainPosts,categories};
}

const mapDispatchToProps = dispatch => {
  return {
    getMainPosts:() => {
      dispatch(getPost(MAIN_POST_TYPE_ID));
    },
    getTopPost:() => {
      dispatch(getPost(TOP_POST_TYPE_ID));
    }
  }
}

class Home extends Component {

  componentDidMount(){
    this.props.getMainPosts();
  }

  render(){
    return (
      <div className="home">
        <AsideNav categories={this.props.categories} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <MainPost posts={this.props.mainPosts} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  

export default connect(mapStateTopProps,mapDispatchToProps)(Home);
