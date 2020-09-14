import React, {useEffect} from 'react';
import { connect } from 'react-redux';


const SinglePost = ({post}) => {

    useEffect(() => {
       window.scrollTo(0,0);
    });

    if(!post){
        return(
            <p>Загрузка...</p>
        )
    }
    return(
        <div className="home-wrap">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="single__wrap row no-gutters">
                            <div className="col-6 single__left d-flex align-items-end">
                                <div className="single__panel">
                                    <div className="d-flex justify-content-between align-items-center">
                                        {/* <ul className="category-list m-0">
                                            {post.acf.post_categories && post.acf.post_categories.map(item => (
                                                <li className="category-list__item single__category m-0 pr-3" key={item.term_id}>{item.name}</li>
                                            ))}
                                        </ul> */}
                                    </div>
                                    <h1 className="single__title">{post.title.rendered}</h1>
                                    <p className="single__description">{post.acf.post_description}</p>
                                    <ul className="category-list m-0">
                                        <li className="category-list__item single__category m-0 pr-3">{post.acf.post_external}</li>
                                        <li className="category-list__item single__category m-0 pr-3">{post.acf.post_date}</li>
                                    </ul>
                                </div>
                            </div>
                            <div  className="col-6 single__img-wrap">
                                <img src={post.acf.post_image.sizes['twentyseventeen-featured-image']} alt={post.title.rendered} className="single__img filtered-img img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-8 m-auto">
                        <div className="single__content-text" dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {

    const type = ownProps.match.params.type;
    const slug = ownProps.match.params.slug;
    const posts = {...state.post};
    let post = {};

    switch(type){
        case 'main':{
            post = posts.mainPosts.find(post => post.slug.toLowerCase() === slug.toLowerCase());
            break;
        }
        case 'top':{
            post = posts.topPosts.find(post => post.slug.toLowerCase() === slug.toLowerCase());
            break;
        }
        case 'standart':{
            post = posts.standartPosts.find(post => post.slug.toLowerCase() === slug.toLowerCase());
            break;
        }
        case 'recomend':{
            post = posts.recomendPosts.find(post => post.slug.toLowerCase() === slug.toLowerCase());
            break;
        }
        case 'novelty':{
            post = posts.noveltyPosts.find(post => post.slug.toLowerCase() === slug.toLowerCase());
            break;
        }
        default:{
            post = {}
        }
    }

    return {post}
}

export default connect(mapStateToProps,null)(SinglePost);