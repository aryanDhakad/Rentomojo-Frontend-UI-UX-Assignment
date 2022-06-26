import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, increment, decrement } from "../redux/index";

function Create() {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: "",
    id: 0,
  });

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
      id: post.posts.length,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(note);
    dispatch(addPost(note));
    setNote({
      title: "",
      id: 0,
    });
  };

  return (
    <div>
      <h1>Create Area</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={note.title}
          name="title"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <button onChange={() => dispatch(increment())}>Increase</button>
      <button onChange={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default Create;
