import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

const CategoryPostPage = ({posts}) => {
    console.log(posts);
    if(!posts.length){
        return(
            <p>Загрузка...</p>
        )
    }
    return(
        <div className="home-wrap">
             {posts.map((item,index) => (
                <div className="col-4">
                    <Link to="#" className="base-post__link" key={index}>
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="category-list m-0">
                                {item.acf.post_categories && item.acf.post_categories.map(elem => (
                                    <li className="category-list__item m-0 pr-3" key={elem.term_id}>{elem.name}</li>
                                ))}
                            </ul>
                            <span className="main-post__external">{item.acf.post_external}</span>
                        </div>
                        <div className="base-post__img-wrap">
                            <img src={item.acf.post_image.sizes['twentyseventeen-featured-image']} alt={item.title.rendered} className="base-post__img filtered-img"/>
                        </div>
                        <div className="base-post__info d-flex justify-content-between mt-2">
                            <span className="base-post__date">{item.acf.post_date}</span>
                        </div>
                        <h2 className="base-post__caption mt-0 mb-2">{item.title.rendered}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    const categoryId = ownProps.match.params.categoryId;
    
    const post = {...state.post}

    let postItems,
        posts = [];

    for (var key in post){

        postItems = post[key].filter(item => item.tags.includes(parseInt(categoryId)));
       
        if(postItems.length){
            posts = [...posts,...postItems];
        }
    }
    
    return {posts}
}

export default connect(mapStateToProps,null)(CategoryPostPage);