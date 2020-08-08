import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getPost } from '../actions/post';
import {MAIN_POST_TYPE_ID} from '../constants/api';

const mapDispatchToProps = dispatch => {
  return {
    getMainPost:() => {
      dispatch(getPost(MAIN_POST_TYPE_ID));
    }
  }
}

class Home extends Component {

  componentDidMount(){
    this.props.getMainPost();
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
