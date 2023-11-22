import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  currentUser = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        const resPosts = await fetch(
          `http://localhost:3000/posts/${currentUser.id}`
        );
        if (!resPosts.ok) {
          throw new Error("Failed to fetch posts.");
        }
        const dataPosts = await resPosts.json();
        setPosts(dataPosts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (posts.length === 0) {
    return (
      <>
        <h1>There are no posts</h1>
        <button>Add post</button>
      </>
    );
  }

  return (
    <>
      <div>
        {posts.map((post) => (
          <Post id={post.id} title={post.title} body={post.body} />
        ))}
      </div>
      <div>
        <button>Add post</button>
      </div>
    </>
  );
}

export default Posts;
