import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getPost } from '../actions/post';

const mapDispatchToProps = dispatch => {
  return {
    onGetPosts:() => {
      dispatch(getPost());
    }
  }
}

class Home extends Component {

  componentDidMount(){
    this.props.onGetPosts();
  }

  render(){
    return (
      <div className="home">
        IT IS HOME 
      </div>
    );
  }
}
  

export default connect(null,mapDispatchToProps)(Home);
