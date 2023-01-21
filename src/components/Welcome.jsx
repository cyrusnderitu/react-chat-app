import React from "react";

const Welcome = () => {
  const googleSignIn = () => {
    console.log("You are trying to log in")
  };

  return (
    <main className="welcome font-">
      <h2 className="text-red">Welcome to React Chat.</h2>
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in" onClick={googleSignIn}>
        Sign-In
      </button>
    </main>
  );
};
export default Welcome;