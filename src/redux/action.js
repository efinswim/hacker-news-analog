import { POSTS_LOAD } from './types';

export function postsLoad() {
  return async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsonData = await response.json();
    dispatch({
      type: POSTS_LOAD,
      data: jsonData
    })
  }
}