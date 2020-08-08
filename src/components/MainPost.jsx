import React from 'react';
import {Link} from "react-router-dom";

const MainPost = ({posts}) => {
    console.log(posts[0]);
    if(!posts.length){
        return <p>Загрузка...</p>
    }

    return(
        <div>
            <h2>{posts[0].title.rendered}</h2>

            <Link to='#' className="mainnews__link">
               <img src={posts[0].acf.post_image.sizes['twentyseventeen-featured-image']} />
            </Link>
        </div>
    )
    
}

export default MainPost;