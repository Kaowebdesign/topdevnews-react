import React from 'react';
import {Link} from "react-router-dom";

const RecomendPost = ({posts}) => {
    if(!posts){
        return <p>Загрузка ...</p>
    }

    return(
        <>
            <div className="recomend-post__link main-post__link">
                <h2 className="recomend-post__title mb-0">Мы рекомендуем:</h2>
                <div className="recomend-post__img-wrap">
                    <img src={posts.acf.post_image.sizes['twentyseventeen-featured-image']} alt={posts.title.rendered} className="recomend-post__img"/>
                    <div className="recomend-post__panel">
                        <div className="d-flex justify-content-start align-items-center">
                            <ul className="category-list recomend-post__list m-0">
                                {posts.acf.post_categories && posts.acf.post_categories.map(item => (
                                    <li className="category-list__item recomend-post__item m-0 pr-3" key={item.term_id}>
                                        <Link to={`/posts/${item.name.toLowerCase()}`} className="category-list__link recomend-post__route-link">{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-10 col-md-8">
                            <Link to={`/post/recomend/${posts.slug}`} className="base-post__route"><h2 className="recomend-post__caption">{posts.title.rendered}</h2></Link>
                                <p className="recomend-post__date m-0">{posts.acf.post_date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecomendPost;