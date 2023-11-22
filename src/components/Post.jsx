import React from "react";
import { Link } from "react-router-dom";

function Post(props) {
  return (
    <>
      <div key={props.id}>
        <Link to={props.id}>
          <div>
            <h4>{props.title}</h4>
            <h5>{props.id}</h5>
          </div>
        </Link>
        <button onClick={() => props.delete(props.id)}>delete</button>
      </div>
    </>
  );
}
export default Post;
