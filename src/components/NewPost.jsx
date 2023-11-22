import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";
function NewPost() {
  const currUser = JSON.parse(localStorage.getItem("currentUser"));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { posts, setPosts } = useContext(PostsContext);
  const goBackToPosts = useNavigate();
  function handleAddPost() {
    const newpost = {
      userId: currUser.id,
      title: title,
      body: content,
    };
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newpost),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts((prev) => {
          [...prev, data];
        });
      });

    goBackToPosts("..");
  }
  return (
    <>
      <div>
        <form>
          <label htmlFor="title">title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            type="text"
            value={title}
          />
          <label htmlFor="body">content</label>
          <input
            onChange={(e) => setContent(e.target.value)}
            name="body"
            type="text"
            value={content}
          />
          <button onClick={handleAddPost}>Add</button>
        </form>
      </div>
    </>
  );
}

export default NewPost;
