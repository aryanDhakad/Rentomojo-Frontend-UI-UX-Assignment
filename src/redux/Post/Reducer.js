import { ADD_POST, DELETE_POST, EDIT_POST } from "./ActionTypes";

const initalState = {
  posts: [],
  loading: false,
  error: null,
};

const PostReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.post.id),
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.post.id ? action.post : post
        ),
      };
    default:
      return state;
  }
};

export default PostReducer;
