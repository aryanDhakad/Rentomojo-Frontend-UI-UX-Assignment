import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../redux/index";

function Posts() {
  const post = useSelector((state) => state.post);
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Posts</h1>
      {post.posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>
              <span>{post.id} </span>
              <span>{post.title}</span>
            </h1>
            <button onClick={() => dispatch(deletePost(post))}>Delete</button>
            {/* <button onClick={() => dispatch(editPost(post))}>Edit</button> */}
          </div>
        );
      })}
      <h2>Counter : {counter.count}</h2>
    </div>
  );
}

export default Posts;
