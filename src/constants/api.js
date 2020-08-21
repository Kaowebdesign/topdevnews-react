//define base url-s from requests to server
export const BASE_API_URL = "https://topdevnews.pp.ua/wp-json";
export const POSTS = "/wp/v2/posts";
export const CATEGORIES = "/wp/v2/tags";
//define different post type
export const MAIN_POST_TYPE_ID = 5;
export const TOP_POST_TYPE_ID = 4;
export const RECOMEND_POST_TYPE_ID = 7;
export const NOVELTY_POST_TYPE_ID = 8;
export const STANDART_POST_TYPE_ID = 6;
//every post type equal some string name, which will be used in route
export const POST_TYPE = {
    [MAIN_POST_TYPE_ID]:'main',
    [TOP_POST_TYPE_ID]:'top',
    [RECOMEND_POST_TYPE_ID]:'recomend',
    [NOVELTY_POST_TYPE_ID]:'novelty',
    [STANDART_POST_TYPE_ID]:'stasndart'
}