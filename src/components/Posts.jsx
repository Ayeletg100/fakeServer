import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [IsAddingPost, setIsAddingPost] = useState(false);
  const currUser = JSON.parse(localStorage.getItem("currentUser"));
  const { postId } = useParams();
  console.log(postId);
  async function loadPosts() {
    try {
      setLoading(true);
      const resPosts = await fetch("http://localhost:3000/posts/");
      if (!resPosts.ok) {
        throw new Error("Failed to fetch posts.");
      }
      const dataPosts = await resPosts.json();
      console.log("dataPosts: ", dataPosts);
      const myPosts = dataPosts.filter((post) => post.userId === currUser.id);
      setPosts(myPosts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadPosts();
  }, []);

  function handleDeletePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  //   function handleAddPost(){

  //   }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (posts.length === 0) {
    return (
      <>
        <h1>There are no posts</h1>
        {/* <button onClick={handleAddPost}>Add post</button> */}
      </>
    );
  }

  return (
    <>
      <h1>Posts:</h1>
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            delete={handleDeletePost}
          />
        ))}
      </div>
      <div>
        <button>Add post</button>
        {/* onClick={handleGoToNewPosts} */}
      </div>
    </>
  );
}

export default Posts;
