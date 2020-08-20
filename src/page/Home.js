import React, { Component } from 'react';
import {connect} from 'react-redux';
import MainPost from '../components/MainPost';
import TopPosts from '../components/TopPosts';
import LastPosts from '../components/LastPosts';
import RecomendPost from '../components/RecomendPost';
import CategoryPost from '../components/CategoryPost';

const mapStateTopProps = state => {

  let {mainPosts,topPosts,standartPosts,recomendPosts,noveltyPosts} = state.post;

  return {mainPosts,topPosts,standartPosts,recomendPosts,noveltyPosts};
}

class Home extends Component {

  render(){
    return (
      <div className="home">
        <div className="home-wrap">
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
                <CategoryPost posts={this.props.noveltyPosts} category="novelty" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  

export default connect(mapStateTopProps,null)(Home);
