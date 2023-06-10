import React, { useState, useEffect, useContext } from "react";
import DataContext from "./context/DataContext";
import { useParams, useHistory } from "react-router-dom";
import api from "./api/posts";

const EditPost = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const history = useHistory();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = async (id) => {
    try {
      const updatedPost = {
        title: editTitle,
        body: editBody,
      };
      const response = await api.patch(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="postTitle">Post Title</label>
      <br />
      <input
        type="text"
        name="postTitle"
        id="postTitle"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <br />
      <label htmlFor="postBody">Post body</label>
      <br />
      <textarea
        name="postBody"
        id="postBody"
        cols="30"
        rows="10"
        value={editBody}
        onChange={(e) => setEditBody(e.target.value)}
      ></textarea>
      <br />
      <button onClick={() => handleEdit(post.id)}>Update</button>
    </form>
  );
};

export default EditPost;
