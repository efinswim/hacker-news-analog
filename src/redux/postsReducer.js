import { POSTS_LOAD } from './types';

const initialState = {
  posts: [],
  id: 1
}

export const postsReducer = (state = initialState, action) => {

  switch (action.type) {
    case POSTS_LOAD:
      const postsNew = action.data.map((item) => {
        return {
          body: item.body,
          id: item.id
        }
      })
      return {
        ...state,
        posts: postsNew
      }

    default:
      return state;  
  }
}