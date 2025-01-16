"use client";
import { CardHover } from "@/components/ui/CardHover";
import { title } from "process";
import React from "react";
import {
  SiCplusplus,
  SiCsharp,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skill() {
  const skills = [
    {
      title: "React",
      Icon: SiReact,
    },
    {
      title: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      title: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      title: "TypeScript",
      Icon: SiTypescript,
    },
    {
      title: "C++",
      Icon: SiCplusplus,
    },
    {
      title: "C#",
      Icon: SiCsharp,
    },
  ];
  return (
    <div className="mt-40 flex flex-col justify-center items-center">
      <div
        className={`font-bold text-3xl cursor-pointer underline underline-offset-8 decoration-blue-900 `}
      >
        Skills
      </div>
      <CardHover items={skills} />
    </div>
  );
}
