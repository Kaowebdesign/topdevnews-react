import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getPost } from '../actions/post';
import {
  MAIN_POST_TYPE_ID,
  TOP_POST_TYPE_ID
} from '../constants/api';
import MainPost from '../components/MainPost';

const mapStateTopProps = state => {

  let {mainPosts} = state.post;

  return {mainPosts};
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
        <MainPost posts={this.props.mainPosts} />
        IT IS HOME 
      </div>
    );
  }
}
  

export default connect(mapStateTopProps,mapDispatchToProps)(Home);
