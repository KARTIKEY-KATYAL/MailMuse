"use client"
import React, { useContext } from 'react'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState } from 'react';
import { userDetailContext } from '@/context/userDetailContext';


function Provider({children}) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    const [userDeatail, setuserDeatail] = useState();
    
    useEffect(() => {
      if (typeof window != undefined){
        const storage = JSON.parse(localStorage.getItem("userDetail"));
        if (!storage?.email || !storage){
            // Redirect user Home Screen

        }
        else{
            setuserDeatail(storage);
        }
      }
    }, [])
    

  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <userDetailContext.Provider value={{ userDeatail, setuserDeatail }}>
          <ConvexProvider client={convex}>{children}</ConvexProvider>
        </userDetailContext.Provider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default Provider


export const useUserDetail = () =>{
    return useContext(userDetailContext)
}