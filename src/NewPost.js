import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import DataContext from "./context/DataContext";
import api from "./api/posts";

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM, dd, yyyy pp");
    const newPost = {
      id,
      title: postTitle,
      body: postBody,
      datetime,
    };

    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      history.push("/post/" + id);
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
        console.log(err.response.data);
        console.log(err.response.status);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };
  return (
    <form className="newPost" onSubmit={handleSubmit}>
      <h3>Create a New Post</h3>

      <div className="controls">
        <label htmlFor="postTitle">Post title</label>
        <br />
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          required
          autoFocus
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <br />
        <label htmlFor="postBody">Post body</label>
        <br />
        <textarea
          required
          name="postBody"
          id="postBody"
          cols="30"
          rows="10"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Post</button>
      </div>
    </form>
  );
};

export default NewPost;
