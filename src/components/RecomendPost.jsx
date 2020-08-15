import React from 'react';
import {Link} from "react-router-dom";

const RecomendPost = ({posts}) => {
    if(!posts.length){
        return <p>Загрузка ...</p>
    }

    return(
        <div>
            <Link to='#' className="recomend-post__link main-post__link">
                <h2 className="recomend-post__title mb-0">Мы рекомендуем:</h2>
                <div className="recomend-post__img-wrap">
                    <img src={posts[0].acf.post_image.sizes['twentyseventeen-featured-image']} alt={posts[0].title.rendered} className="recomend-post__img"/>
                    <div className="recomend-post__panel">
                        <div className="d-flex justify-content-start align-items-center">
                            <ul className="category-list recomend-post__list m-0">
                                {posts[0].acf.post_categories && posts[0].acf.post_categories.map(item => (
                                    <li className="category-list__item recomend-post__item m-0 pr-3" key={item.term_id}>{item.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <h2 className="recomend-post__caption">{posts[0].title.rendered}</h2>
                                <p className="recomend-post__date m-0">{posts[0].acf.post_date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default RecomendPost;