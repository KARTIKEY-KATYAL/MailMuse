"use client"
import Header from '@/components/custom/Header'
import React from 'react'
import { useUserDetail } from '@/app/provider';
import { Button } from '@/components/ui/button';
import EmailTemplateList from "@/components/custom/EmailTemplateList";

function page() {
  const { userDeatail, setuserDeatail } = useUserDetail();
  console.log("userdetail " + userDeatail);
  
  return (
    <div>
      <Header />
      <div className="px-10 md:px-28 lg:px-40 xl:px-56 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="font-bold text-3xl text-gray-800">
            Hello, <span className="text-red-600">{userDeatail?.name}</span>
          </h2>
          <Button className="bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 px-6 py-6 hover:scale-110 transition-all duration-300">
            + Create New Email Template
          </Button>
        </div>
        <EmailTemplateList/>
      </div>
    </div>
  );
}

export default page
