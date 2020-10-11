import React from 'react';
import {Link} from "react-router-dom";

const CategoryPost = ({posts,category,more,title}) => {

    if(!posts.length){
        return <p>Загрузка...</p>
    }

    let containerClasses = ['padding-base',category];
    
    return(
        <div className={containerClasses.join(' ')}>
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                    <h2 className="caption caption_base">{title}</h2>
                </div>
            </div>
            <div className="row mt-5 pb-5">
                {posts.map((item,index) => (
                    <div className="col-12 col-sm-6 col-lg-3 base-post__link" key={index}>
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="category-list m-0">
                                {item.acf.post_categories && item.acf.post_categories.map(elem => (
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
                        <Link to={`/post/${category}/${item.slug}`} className="base-post__route"><h2 className="base-post__caption mt-0 mb-2">{item.title.rendered}</h2></Link>
                    </div>
                ))}
            </div>
            { more?
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <button className="base-button base-button__more"><Link to={`/posts/${category}`}>Читать далее</Link></button>
                </div>
            </div>
            : ''
            }
        </div>
    )
};

export default CategoryPost;