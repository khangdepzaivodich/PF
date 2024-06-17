"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative  mt-20">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full h-full relative z-10">
        <div className="space-y-6 z-10 p-4 mt-20 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold ">
            Nice to meet you! <br />{" "}
            <span className="underline underline-offset-4 decoration-purple-500">
              I`m Khang
            </span>
          </h1>
          <p>
            I`m a Fullstack developer passionate about building a modern web
            application.
          </p>
          <Button
            borderRadius="1.75rem"
            className=" bg-slate-900 text-white border-slate-800 font-semibold  "
          >
            <Link
              href={"https://www.facebook.com/profile.php?id=100089034453474"}
              target="_blank"
            >
              Contact me Now
            </Link>
          </Button>
        </div>
        <div className="w-72 h-72 space-y-4 rotate-45 z-10 p-4 relative">
          <div className="flex gap-4">
            <div className="bg-yellow-500 w-32 h-32 rounded-xl hover:bg-yellow-300 transition-all"></div>
            <div className="bg-indigo-500 w-32 h-32 rounded-xl hover:bg-indigo-300 transition-all"></div>
          </div>
          <div className="flex gap-5 translate-x-7">
            <div className="bg-indigo-500 w-32 h-32 rounded-xl hover:bg-indigo-300 transition-all"></div>
            <div className="bg-yellow-500 w-32 h-32 rounded-xl hover:bg-yellow-300 transition-all"></div>
          </div>
          <div className="glow absolute top-[50%] right-[40%] -z-10"></div>
        </div>
      </div>
    </div>
  );
}
