import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getPost } from '../actions/post';
import {
  MAIN_POST_TYPE_ID,
  TOP_POST_TYPE_ID,
  STANDART_POST_TYPE_ID,
  RECOMEND_POST_TYPE_ID,
  NOVELTY_POST_TYPE_ID
} from '../constants/api';
import AsideNav from '../components/AsideNav';
import MainPost from '../components/MainPost';
import TopPosts from '../components/TopPosts';
import LastPosts from '../components/LastPosts';
import RecomendPost from '../components/RecomendPost';
import CategoryPost from '../components/CategoryPost';
import '../assets/css/home.css';

const mapStateTopProps = state => {
  let {mainPosts,topPosts,standartPosts,recomendPosts,noveltyPosts} = state.post;
  let {categories} = state.category;
  return {mainPosts,topPosts,categories,standartPosts,recomendPosts,noveltyPosts};
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts:() => {
      dispatch(getPost([STANDART_POST_TYPE_ID,MAIN_POST_TYPE_ID,TOP_POST_TYPE_ID,RECOMEND_POST_TYPE_ID,NOVELTY_POST_TYPE_ID]));
    }
  }
}

class Home extends Component {

  componentDidMount(){
    this.props.getPosts();
  }

  render(){
    return (
      <div className="home">
        <div className="home-wrap">
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
            <div className="row">
              <div className="col-12">
                <RecomendPost posts={this.props.recomendPosts}/>
              </div>
            </div>
          </div>
        </div>
        <div className="novelty">
          <div className="home-wrap">
            <div className="container-fluid">
              <div className="row novelty__top">
                <div className="col-3">
                  <h2 className="caption caption_base">Новости:</h2>
                </div>
              </div>
              <div className="row novelty__posts">
                <CategoryPost posts={this.props.noveltyPosts}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  

export default connect(mapStateTopProps,mapDispatchToProps)(Home);
