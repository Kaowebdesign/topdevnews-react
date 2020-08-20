import React from 'react';

const CategoryPostPage = ({posts}) => {
    console('category',posts);
    if(!posts){
        return(
            <p>Загрузка...</p>
        )
    }
    return(
        <div className="home-wrap">

        </div>
    )
}

export default CategoryPostPage;