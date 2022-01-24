import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <img
        className="contactImg"
        src="https://images.pexels.com/photos/3756716/pexels-photo-3756716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <form className="contactForm">
        <div className="contactFormGroup">
          <input
            type="email"
            placeholder="Enter Your email...."
            className="contactInput"
            autoFocus={true}
          />
        </div>
        <div className="contactFormGroup">
          <textarea
            placeholder="Enter your text...."
            type="text"
            className="contactInput_writeText"
          ></textarea>
          <button className="contactSubmit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Contact;
