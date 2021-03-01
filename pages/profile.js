import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import "../configureAmplify";

const Profile = () => {
  useEffect(() => {
    checkUser();
    async function checkUser() {
      const user = await Auth.currentAuthenticatedUser();
      console.log({ user });
    }
  }, []);

  return (
    <div>
      <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>
        Google
      </button>
      <button onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}>
        Facebook
      </button>
      <button onClick={() => Auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default Profile;
