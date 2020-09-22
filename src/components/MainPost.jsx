import React from 'react';
import {Link} from "react-router-dom";

const MainPost = ({posts}) => {
    
    if(!posts.length){
        return <p>Загрузка...</p>
    }

    return(
        <div className="main-post">
            <div className="main-post__link">
                <div className="d-flex justify-content-between align-items-center">
                    <ul className="category-list m-0">
                        {posts[0].acf.post_categories && posts[0].acf.post_categories.map(item => (
                            <li className="category-list__item m-0 pr-3" key={item.term_id}>
                                <Link to={`/posts/${item.name.toLowerCase()}`} className="category-list__link">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                        <span className="main-post__external">{posts[0].acf.post_external}</span>
                </div>
                <Link to={`/post/main/${posts[0].slug}`} className="base-post__route">
                    <div className="main-post__img-wrap">
                        <img src={posts[0].acf.post_image.sizes['twentyseventeen-featured-image']} alt={posts[0].title.rendered} className="main-post__img filtered-img"/>
                    </div>
                </Link>
                <div className="row mt-3">
                    <div className="col-xl-8 col-lg-7 col-sm-6 col-12">
                        <Link to={`/post/main/${posts[0].slug}`} className="base-post__route"><h2 className="main-post__caption">{posts[0].title.rendered}</h2></Link>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-sm-6 col-12">
                        <p className="main-post__text m-0">{posts[0].acf.post_description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default MainPost;