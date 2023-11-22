import { useNavigate } from "react-router-dom";
function NewPost(props) {
  return (
    <>
      <div>
        <form>
          <label htmlFor="title">title</label>
          <input name="title" type="text" />
          <label htmlFor="body">content</label>
          <input name="body" type="text" />
          <button>Add</button>
        </form>
      </div>
    </>
  );
}

export default NewPost;
