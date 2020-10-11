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
      <div className="home" id="base-wrap">
        <div className="home-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-6">
                <MainPost posts={this.props.mainPosts} />
              </div>
              <div className="col-lg-3 col-sm-6 col-12 d-block d-md-none">
                <h2 className="caption caption_base caption_top">Топ новости:</h2>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <TopPosts/>
              </div>
              <div className="d-none d-lg-block col-lg-3">
                <h2 className="caption caption_base">Последние новости:</h2>
                <LastPosts posts={this.props.standartPosts}/>
              </div>
            </div>
            <div className="row recomend-wrap">
              <div className="col-12">
                <RecomendPost posts={this.props.recomendPosts[0]}/>
              </div>
            </div>
            <CategoryPost posts={this.props.noveltyPosts} category="novelty" more={false} title="Новости"/>
            <div className="row recomend-wrap">
              <div className="col-12">
                <RecomendPost posts={this.props.recomendPosts[1]}/>
              </div>
            </div>
            <CategoryPost posts={this.props.standartPosts} category="standart" more={true} title="Новости"/>
          </div>
        </div>
      </div>
    );
  }
}
  

export default connect(mapStateTopProps,null)(Home);
