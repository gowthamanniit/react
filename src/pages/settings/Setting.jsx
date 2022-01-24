import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";

function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Pic</label>
          <div className="settingPP">
            <img
              className=""
              src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingPPIcon fas fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Azar" />
          <label>Email</label>
          <input type="email" placeholder="Azar@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
export default Setting;
