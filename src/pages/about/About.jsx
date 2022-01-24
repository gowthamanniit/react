import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="aboutItem">
        <span className="aboutTitle">About Me</span>
        <img
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          nulla ea modi ut iusto.
        </p>
      </div>
      <div className="aboutItems">
        <span className="aboutTitle">Categories</span>
        <ul className="aboutList">
          <li className="aboutListItem">Life</li>
          <li className="aboutListItem">Music</li>
          <li className="aboutListItem">Style</li>
          <li className="aboutListItem">Sport</li>
          <li className="aboutListItem">Tech</li>
          <li className="aboutListItem">Cinema</li>
        </ul>
      </div>
      <div className="aboutItem">
        <span className="aboutTitle">Follow Us</span>
        <div className="aboutSocial">
          <i className="aboutIcon fab fa-facebook-square"></i>
          <i className="aboutIcon fab fa-twitter-square"></i>
          <i className="aboutIcon fab fa-pinterest-square"></i>
          <i className="aboutIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

export default About;
