import * as api from '../api';

//create actions -> functions that return actions

export const getPosts = () => async (dispatch) => {
    try {
        //patch an action the data from backend
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data}); //return  action
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {

        const {data} = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}