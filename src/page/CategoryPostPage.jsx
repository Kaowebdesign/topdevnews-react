import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {POST_TYPE} from "../constants/api";
import TopPosts from "../components/TopPosts";

const CategoryPostPage = ({posts,categoryName}) => {

    if(!posts.length){
        return(
            <p>Загрузка...</p>
        )
    }

    window.addEventListener('scroll',function(nav){
        let elemPosTop = window.scrollY;
        let scrollCoef = 0.005;

        if(window.scrollY > 0){

            if( (0.5 + Math.abs(elemPosTop) * scrollCoef) <= 1){
                document.getElementById('category-back').style.transform = "scaleX(" + ( 0.5 + Math.abs(elemPosTop) * scrollCoef) + ")";
            }else{
                document.getElementById('category-back').style.transform = "scaleX(1)";
            }
            
        }else{
            document.getElementById('category-back').style.transform = "scaleX(0.5)";
        }
    });
    
    return(
        <div className="home-wrap category-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="category-page__panel text-center">
                            <h1 className="caption caption_category mb-0">{categoryName}</h1>
                            <span className="category-page__panel_back" id="category-back"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9 col-12">
                        <div className="row">
                            {posts.map((item,index) => (
                                <div className="col-sm-6 col-12" key={index}>
                                    <Link to={`/post/${POST_TYPE[item.categories[0]]}/${item.slug}`} className="base-post__link">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <ul className="category-list m-0">
                                                {item.acf.post_categories && item.acf.post_categories.map(elem => (
                                                    <li className="category-list__item m-0 pr-3" key={elem.term_id}>
                                                        <Link to={`/posts/${elem.name.toLowerCase()}`} className={'category-list__link ' + (elem.name.toLowerCase() === categoryName.toLowerCase() ? "active" : null)}>{elem.name}</Link>
                                                    </li>
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
                                        <p className="base-post__description mb-0" dangerouslySetInnerHTML={{__html:item.acf.post_description}}></p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <h2 className="caption caption_base category_top">Топ новости:</h2>
                        <TopPosts/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    //get all categories from state
    const { categories } = {...state.category};
    //get category name from router params
    const categoryName = ownProps.match.params.categoryName;
    //defina object for current category
    let currentCategory = null;

    //search current category from category name
    if(categories.length){
        currentCategory = categories.find(item => item.name.toLowerCase() === categoryName.toLowerCase());
    }
    
    //get all posts from state
    const post = {...state.post}
    
    let postItems,
        posts = [];

    for (var key in post){

        postItems = post[key].filter(item => item.tags.includes(parseInt(currentCategory.id)));
       
        if(postItems.length){
            posts = [...posts,...postItems];
        }
    }
    
    return {posts,categoryName}
}

export default connect(mapStateToProps,null)(CategoryPostPage);