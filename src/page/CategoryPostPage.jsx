import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {POST_TYPE} from "../constants/api";
import TopPosts from "../components/TopPosts";

const CategoryPostPage = ({posts}) => {
    console.log(posts);
    if(!posts.length){
        return(
            <p>Загрузка...</p>
        )
    }
    return(
        <div className="home-wrap">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {posts.map((item,index) => (
                                <div className="col-6">
                                    <Link to={`/post/${POST_TYPE[item.categories[0]]}/${item.slug}`} className="base-post__link" key={index}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <ul className="category-list m-0">
                                                {item.acf.post_categories && item.acf.post_categories.map(elem => (
                                                    <li className="category-list__item m-0 pr-3" key={elem.term_id}>{elem.name}</li>
                                                ))}
                                            </ul>
                                            <span className="main-post__external">{item.acf.post_external}</span>
                                        </div>
                                        <div className="base-post__img-wrap category-post__img-wrap">
                                            <img src={item.acf.post_image.sizes['twentyseventeen-featured-image']} alt={item.title.rendered} className="category-post__img filtered-img"/>
                                        </div>
                                        <div className="base-post__info d-flex justify-content-between mt-2">
                                            <span className="base-post__date">{item.acf.post_date}</span>
                                        </div>
                                        <h2 className="base-post__caption mt-0 mb-2">{item.title.rendered}</h2>
                                        <div className="base-post__description" dangerouslySetInnerHTML={{__html:item.excerpt.rendered}}></div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-3">
                        <h2 className="caption caption_base">Топ новости:</h2>
                        <TopPosts/>
                    </div>
                </div>
            </div>
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