import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getPost } from '../actions/post';
import {
  MAIN_POST_TYPE_ID,
  TOP_POST_TYPE_ID,
  STANDART_POST_TYPE_ID
} from '../constants/api';
import AsideNav from '../components/AsideNav';
import MainPost from '../components/MainPost';
import TopPosts from '../components/TopPosts';
import LastPosts from '../components/LastPosts';
import '../assets/css/home.css';

const mapStateTopProps = state => {

  let {mainPosts,topPosts,standartPosts} = state.post;
  let {categories} = state.category;
  return {mainPosts,topPosts,categories,standartPosts};
}

const mapDispatchToProps = dispatch => {
  return {
    getMainPosts:() => {
      dispatch(getPost(MAIN_POST_TYPE_ID));
    },
    getTopPost:() => {
      dispatch(getPost(TOP_POST_TYPE_ID));
    },
    getPosts:() => {
      dispatch(getPost(STANDART_POST_TYPE_ID));
    }
  }
}

class Home extends Component {

  componentDidMount(){
    this.props.getMainPosts();
    this.props.getTopPost();
    this.props.getPosts();
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
            <div className="col-3">
              <TopPosts posts={this.props.topPosts}/>
            </div>
            <div className="col-3">
              <h2 className="caption caption_base">Последние новости:</h2>
              <LastPosts posts={this.props.standartPosts}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  

export default connect(mapStateTopProps,mapDispatchToProps)(Home);
