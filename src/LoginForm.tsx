import { useState } from "react";
import FacebookLogin from "react-facebook-login";

const LoginForm = (props: any) => {
  const [userData, setUserData] = useState<any>(null);

  const handleFacebookCallback = (response: any) => {
    if (response?.status === "unknown") {
      console.error("Sorry!", "Something went wrong with Facebook Login.");
      return;
    }
    setUserData(response);
    console.log(response);
  };

  const handleLogout = () => {
    setUserData(null);
  };

  return (
    <div>
      {userData ? (
        <div>
          <img src={userData.picture.data.url} alt="Profile" />
          <h2>Welcome, {userData.name}!</h2>
          <p>User Id: {userData.userID}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <FacebookLogin
          buttonStyle={{ padding: "6px" }}
          appId="xxxx use env file"
          autoLoad={false}
          fields="name,email,picture"
          callback={handleFacebookCallback}
        />
      )}
    </div>
  );
};

export default LoginForm;
