import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Blog</span>
        {/* <span className="headerTitleLg">Blog</span> */}
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/589821/pexels-photo-589821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt=""
      />
    </div>
  );
}

export default Header;
