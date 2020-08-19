import React from 'react';
import {Link} from "react-router-dom";
import "../assets/css/main-post.css";

const MainPost = ({posts}) => {
    
    if(!posts.length){
        return <p>Загрузка...</p>
    }

    return(
        <div className="main-post">
            <Link to={`/post/main/${posts[0].slug}`} className="main-post__link">
                <div className="d-flex justify-content-between align-items-center">
                    <ul className="category-list m-0">
                        {posts[0].acf.post_categories.map(item => (
                            <li className="category-list__item m-0 pr-3" key={item.term_id}>{item.name}</li>
                        ))}
                    </ul>
                        <span className="main-post__external">{posts[0].acf.post_external}</span>
                </div>
                <div className="main-post__img-wrap">
                    <img src={posts[0].acf.post_image.sizes['twentyseventeen-featured-image']} alt={posts[0].title.rendered} className="main-post__img filtered-img"/>
                </div>
                <div className="row mt-3">
                    <div className="col-8">
                        <h2 className="main-post__caption">{posts[0].title.rendered}</h2>
                    </div>
                    <div className="col-4">
                        <p className="main-post__text m-0">{posts[0].acf.post_description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
    
}

export default MainPost;