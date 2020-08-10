import React from 'react';
import {Link} from "react-router-dom";

const LastPosts = ({posts}) => {
    return (
        <div>
            {posts.map((item, index) => (
                <Link to="#" className="base-post__link" key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                        <ul className="category-list m-0">
                            {item.acf.post_categories && item.acf.post_categories.map(elem => (
                                <li className="category-list__item m-0 pr-3" key={elem.term_id}>{elem.name}</li>
                            ))}
                        </ul>
                        <span className="main-post__external">{item.acf.post_external}</span>
                    </div>
                    <h2 className="base-post__caption base-post__caption_sm mt-0 mb-2">{item.title.rendered}</h2>
                </Link>
            ))}
        </div>
    );
};

export default LastPosts;