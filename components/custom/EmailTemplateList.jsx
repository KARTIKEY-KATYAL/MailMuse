"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

function EmailTemplateList() {
  const [EmailList, setEmailList] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="font-bold text-2xl text-blue-950 mb-6">WorkSpace</h2>
      {EmailList?.length === 0 ? (
        <div className="flex flex-col items-center">
          <Image
            src="/email.png"
            alt="workspace"
            width={250}
            height={250}
            className="opacity-80"
          />
          <p className="text-gray-600 mt-4">
            No email templates available. Create one to get started!
          </p>
          <Button className="bg-yellow-300 p-5 rounded-full mt-4 text-xl font-bold text-blue-950 hover:scale-110 transition-all duration-300 hover:bg-blue-800 hover:text-white">Create New</Button>
        </div>
      ) : (
        <div>
          ok
        </div>
      )}
    </div>
  );
}

export default EmailTemplateList;
