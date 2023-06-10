import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import { useParams, Link, useHistory } from "react-router-dom";
import api from "./api/posts";

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const history = useHistory();
  const post = posts.find((post) => post.id.toString() === id);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const filteredPosts = posts.filter((post) => post.id !== id);
      setPosts(filteredPosts);
      history.push("/");
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
    <article className="post">
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <br />
          <p>
            <small>{post.datetime}</small>
          </p>
          <button onClick={() => handleDelete(post.id)} className="delete">
            Delete
          </button>
          <Link to={`/editPost/${post.id}`}>Edit Post</Link>
        </>
      ) : (
        <>
          <h3>Opps! no post is found</h3>
          <p>Well, that's disappointing</p>
          <Link to="/">Go to our home page</Link>
        </>
      )}
    </article>
  );
};

export default PostPage;
