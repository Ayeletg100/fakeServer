import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
function PostDetail() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const [postObj, setPostObj] = useState({});
  const [commentsPressed, setCommentsPressed] = useState(false);
  fetch(`http://localhost:3000/posts/${id}`)
    .then((res) => res.json())
    .then((data) => setPostObj(data));

  useEffect(() => {
    if (commentsPressed === true) {
      loadComments();
    }

    console.log("commentsPressed: ", commentsPressed);
    console.log({ comments });
  }, [commentsPressed]);

  async function loadComments() {
    try {
      const resComments = await fetch(
        `http://localhost:3000/posts/${id}/comments`
      );
      console.log("resComments: ", resComments);

      const dataComments = await resComments.json();

      setComments(dataComments);
    } catch (error) {
      console.log(error);
    }
  }
  //
  return (
    <>
      <div>
        <h2>{postObj.title}</h2>
        <p>{postObj.body}</p>
        <button onClick={() => setCommentsPressed((prev) => !prev)}>
          comments
        </button>
        {commentsPressed === true && (
          <div>
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                postId={comment.postId}
                name={comment.name}
                body={comment.body}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default PostDetail;
