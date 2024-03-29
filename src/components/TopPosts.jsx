import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const TopPosts = ({topPosts}) => {

    return (
        <div className="top-posts">
            {topPosts.map((item,index) => (
                <div className="base-post__link" key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                        <ul className="category-list m-0">
                            {item.acf.post_categories.map(elem => (
                                <li className="category-list__item m-0 pr-3" key={elem.term_id}>
                                    <Link to={`/posts/${elem.name.toLowerCase()}`} className="category-list__link">{elem.name}</Link>
                                </li>
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
                    <Link to={`/post/top/${item.slug}`} className="base-post__route"><h2 className="base-post__caption mt-0 mb-2">{item.title.rendered}</h2></Link>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {

    let {topPosts} = state.post;

    return {topPosts}
}

export default connect(mapStateToProps,null)(TopPosts);
