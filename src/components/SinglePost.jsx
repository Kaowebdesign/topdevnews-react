import React from 'react';
import { connect } from 'react-redux';


const SinglePost = ({posts}) => {

    if(!posts){
        return(
            <p>Загрузка...</p>
        )
    }
    return(
        <div>
            <p>Single post {posts.title.rendered}</p>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {

    const type = ownProps.match.params.type;
    const slug = ownProps.match.params.slug;

    switch(type){
        case 'main':{
            return {
                posts:state.post.mainPosts.find(post => post.slug.toLowerCase() == slug.toLowerCase())
            }
            break;
        }
        case 'top':{
            return {
                posts:state.post.topPosts.find(post => post.slug.toLowerCase() == slug.toLowerCase())
            }
            break;
        }
        case 'standart':{
            return {
                posts:state.post.standartPosts.find(post => post.slug.toLowerCase() == slug.toLowerCase())
            }
            break;
        }
        case 'recomend':{
            return {
                posts:state.post.recomendPosts.find(post => post.slug.toLowerCase() == slug.toLowerCase())
            }
            break;
        }
        case 'novelty':{
            return {
                posts:state.post.noveltyPosts.find(post => post.slug.toLowerCase() == slug.toLowerCase())
            }
            break;
        }
    }
}

export default connect(mapStateToProps,null)(SinglePost);