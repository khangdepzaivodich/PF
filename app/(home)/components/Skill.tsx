"use client";
import { CardHover } from "@/components/ui/CardHover";
import React from "react";
import {
  SiCplusplus,
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
      title: "JavaScript",
      Icon: SiJavascript,
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
