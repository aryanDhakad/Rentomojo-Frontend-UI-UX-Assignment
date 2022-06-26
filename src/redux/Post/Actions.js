import { ADD_POST, DELETE_POST, EDIT_POST } from "./ActionTypes";

// Action Creators
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function deletePost(post) {
  return {
    type: DELETE_POST,
    post,
  };
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    post,
  };
}
