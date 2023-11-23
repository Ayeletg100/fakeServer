// "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body":
function Comment(props) {
  return (
    <>
      <div id={props.key}>
        <h3>{props.name}</h3>
        <p>{props.body}</p>
      </div>
    </>
  );
}

export default Comment;
