import "./Posts.css";
function Comment(props) {
  return (
    <>
      <div className="comment" id={props.key}>
        <h3>{props.name}</h3>
        <p>{props.body}</p>
      </div>
    </>
  );
}

export default Comment;
