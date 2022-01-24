import "./singlepost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Azar</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          facere ipsa. Consequuntur aliquid doloribus eos distinctio, laboriosam
          deserunt minima quaerat? Repudiandae obcaecati iusto, labore dicta
          similique ad earum maxime culpa! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquam, facere ipsa. Consequuntur
          aliquid doloribus eos distinctio, laboriosam deserunt minima quaerat?
          Repudiandae obcaecati iusto, labore dicta similique ad earum maxime
          culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam, facere ipsa. Consequuntur aliquid doloribus eos distinctio,
          laboriosam deserunt minima quaerat? Repudiandae obcaecati iusto,
          labore dicta similique ad earum maxime culpa! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aliquam, facere ipsa. Consequuntur
          aliquid doloribus eos distinctio, laboriosam deserunt minima quaerat?
          Repudiandae obcaecati iusto, labore dicta similique ad earum maxime
          culpa!
        </p>
      </div>
    </div>
  );
}
export default SinglePost;
