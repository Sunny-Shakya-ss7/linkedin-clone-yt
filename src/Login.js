import React, { useState } from "react";
import "./Login.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const auth = getAuth();

  const register = () => {
    if (!name) alert("Please enter a full name!");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoUrl: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: userAuth.user.photoUrl,
            })
          );
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoUrl,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="login">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
        alt="Linkedin"
      />

      <form action="">
        <input
          type="text"
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
