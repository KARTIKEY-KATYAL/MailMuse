import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { userDetailContext } from "@/context/userDetailContext";

function SignInButtonComponent() {
  const [loading, setLoading] = useState(false);
  const CreateUser = useMutation(api.users.CreateUser);
  const {userDeatail, setuserDeatail} = useContext(userDetailContext)

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setLoading(true);
      try {
        console.log("Token Response:", tokenResponse);

        const { data: user } = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse?.access_token}` },
          }
        );

        console.log("User Info:", user);

        // Save to Database
        const result = await CreateUser({
          name: user?.name,
          email: user?.email,
          picture: user?.picture,
        });

        const userDetail = {
          ...user,
          _id: result?.id ?? result,
        };
        setuserDeatail(userDetail)
        localStorage.setItem("userDetail", JSON.stringify(userDetail));
        console.log("User saved and cookie created");
      } catch (error) {
        console.error("Error during login process:", error);
      } finally {
        setLoading(false);
      }
    },
    onError: (errorResponse) => {
      console.error("Login Error:", errorResponse);
    },
  });

  return (
    <div>
      <Button onClick={googleLogin} disabled={loading}>
        {loading ? "Loading..." : "Get Started"}
      </Button>
    </div>
  );
}

export default SignInButtonComponent;
