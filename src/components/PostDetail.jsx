import { useState } from "react";
import { useParams } from "react-router-dom";
function PostDetail() {
  const { id } = useParams();
  const [postObj, setPostObj] = useState({});
  fetch(`http://localhost:3000/posts/${id}`)
    .then((res) => res.json())
    .then((data) => setPostObj(data));
  return (
    <>
      <div>
        <h2>{postObj.title}</h2>
        <p>{postObj.body}</p>
        <button>comments</button>
      </div>
    </>
  );
}

export default PostDetail;
