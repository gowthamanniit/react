import "./TopBar.css";
import { Link } from "react-router-dom";

function TopBar() {
  const user = true;
 const myfun=()=>
  {
    user=false;
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/About">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Contact">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Write">
              Write
            </Link>
          </li>
          <a href="{myfun}"><li className="topListItem">{user && "Logout"}</li></a>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImage"
            src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
        ) : (
          <ul className="topListItem">
            <li className="topListItem">
              <Link className="link" to="/Login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/Register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
