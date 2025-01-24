import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Code,Ghost,Monitor, Smartphone } from "lucide-react";
function EditorHeader() {
  return (
    <div className="p-2 shadow-2xl flex justify-between items-center ">
      <Link href="/">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={90}
            height={90}
            className="rounded-full"
          />
          <h1 className="text-orange-500 text-2xl font-bold">SmartDraft</h1>
          <div></div>
        </div>
      </Link>
      <div>
        <Button>
          <Monitor variant="ghost" className=" font-bold" />
          Monitor
        </Button>
        <Button>
          <Smartphone variant="ghost" className=" font-bold" />
          Smartphone
        </Button>
      </div>
      <div className="flex gap-1">
        <Button
          variant="ghost"
          className="border-2"
        >
          <Code />
        </Button>
        <Button className="bg-red-700 rounded-lg font-bold hover:scale-110 hover:bg-green-600 text-white">
          Send Test Email
        </Button>
        <Button className="bg-blue-600 rounded-lg font-bold hover:scale-110 hover:bg-violet-900 text-white">
          Save Template
        </Button>
      </div>
    </div>
  );}

export default EditorHeader;
