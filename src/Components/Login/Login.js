import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import { firebaseInitialize, handleEmailCreateUser, handleGoogleSignIn, handleSignInUser } from "./LoginHelper";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

firebaseInitialize();

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
 
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    issLoggedIn: false,
    name: "",
    email: "",
    photo: "",
    password: "",
    error: false,
    success: true,
  });

  const onSubmit = (data) => {
   if(user.email && user.password) {
    createUser(); 
   }
   
      
  };
  const createUser = () => {
    handleEmailCreateUser(user.name, user.email, user.password)
    .then(res => {
      console.log(res);
      setUser(res);
      user.error(true);
      user.success(false);
    })
  }

  const SignInUser = () => {
    handleSignInUser(user.email, user.password)
    .then(res => {
      console.log(res);

    })
  }

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
      navigate("/book");
    });
  };
  const handleBlur = (e) => {
    let isValid;
    if(e.target.name === 'name'){
      isValid = e.target.value;      
    }
    if(e.target.name === 'email'){
      console.log('name', e.target.value);
      isValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
     isValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
    }
    if(isValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
      setLoggedInUser(newUserInfo);
    }
  }
  return (
    <div className="login">
      <h2>{user.email}</h2>
      <h2>{user.name}</h2>
      <h2>{user.password}</h2>
      <p>{user.error && <p>already used email</p>}</p>
      {user.issLoggedIn && (
        <div>
          <img src={user.photoURL} alt="" />
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} name="name" onBlur={handleBlur} placeholder="Enter your Name" /> <br />
        {errors.name && <span>This field is required</span>}
        <input {...register("email", { required: true })} name="email" onBlur={handleBlur}  placeholder="Enter your Email" /> <br /> 
        {errors.email && <span>This field is required</span>}
        <input {...register("password", { required: true })} name="password" onBlur={handleBlur}  placeholder="Enter your Password" /> <br />
        {errors.password && <span>This field is required</span>}
        <input type="submit" />
      </form>
      <br />
      <Button onClick={() => googleSignIn()} variant="outlined">
        <GoogleIcon fontSize="small" color="primary" /> Google Sign In
      </Button>
    </div>
  );
};

export default Login;
