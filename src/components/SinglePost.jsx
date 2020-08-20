import React from 'react';
import { connect } from 'react-redux';


const SinglePost = ({posts}) => {

    console.log(posts);
    if(!posts){
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
                                        <ul className="category-list m-0">
                                            {posts.acf.post_categories && posts.acf.post_categories.map(item => (
                                                <li className="category-list__item single__category m-0 pr-3" key={item.term_id}>{item.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <h1 className="single__title">{posts.title.rendered}</h1>
                                    <p className="single__description">{posts.acf.post_description}</p>
                                    <ul className="category-list m-0">
                                        <li className="category-list__item single__category m-0 pr-3">{posts.acf.post_external}</li>
                                        <li className="category-list__item single__category m-0 pr-3">{posts.acf.post_date}</li>
                                    </ul>
                                </div>
                            </div>
                            <div  className="col-6 single__img-wrap">
                                <img src={posts.acf.post_image.sizes['twentyseventeen-featured-image']} alt={posts.title.rendered} className="single__img filtered-img img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-8 m-auto">
                        <div className="single__content-text" dangerouslySetInnerHTML={{ __html: posts.content.rendered }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {

    const type = ownProps.match.params.type;
    const slug = ownProps.match.params.slug;

    switch(type){
        case 'main':{
            return {
                posts:state.post.mainPosts.find(post => post.slug.toLowerCase() == slug.toLowerCase())
            }
            break;
        }
        case 'top':{
            return {
                posts:state.post.topPosts.find(post => post.slug.toLowerCase() == slug.toLowerCase())
            }
            break;
        }
        case 'standart':{
            return {
                posts:state.post.standartPosts.find(post => post.slug.toLowerCase() == slug.toLowerCase())
            }
            break;
        }
        case 'recomend':{
            return {
                posts:state.post.recomendPosts.find(post => post.slug.toLowerCase() == slug.toLowerCase())
            }
            break;
        }
        case 'novelty':{
            return {
                posts:state.post.noveltyPosts.find(post => post.slug.toLowerCase() == slug.toLowerCase())
            }
            break;
        }
    }
}

export default connect(mapStateToProps,null)(SinglePost);