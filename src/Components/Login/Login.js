import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import { firebaseInitialize, handleGoogleSignIn } from "./LoginHelper";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";

firebaseInitialize();

const Login = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    issLoggedIn: true,
    displayName: "",
    email: "",
    photoURL: "",
  });
  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
      navigate("/book")
    });
  };
  return (
    <div>
      {user.issLoggedIn && (
        <div>
          <img src={user.photoURL} alt="" />
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <Button onClick={() => googleSignIn()} variant="outlined">
        <GoogleIcon fontSize="small" color="primary" /> Google Sign In
      </Button>
    </div>
  );
};

export default Login;
