import React from 'react';
import {Link} from "react-router-dom";
import "../assets/css/main-post.css";

const MainPost = ({posts}) => {
    console.log(posts[0]);
    if(!posts.length){
        return <p>Загрузка...</p>
    }

    return(
        <div className="main-post">
            <Link to='#' className="main-post__link">
                <div className="d-flex justify-content-between align-items-center">
                    <ul className="category-list m-0">
                        <li className="category-list__item m-0 pr-3"></li>
                    </ul>
                </div>
                <div className="main-post__img-wrap">
                    <img src={posts[0].acf.post_image.sizes['twentyseventeen-featured-image']} alt={posts[0].title.rendered} className="main-post__img"/>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h2 className="main-post__caption">{posts[0].title.rendered}</h2>
                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </Link>
        </div>
    )
    
}

export default MainPost;