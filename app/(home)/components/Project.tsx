import { DirectionAwareHover } from "@/components/ui/ImgaeHover";
import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";
import { SiCss3, SiHtml5, SiJavascript, SiTailwindcss } from "react-icons/si";

export default function Project() {
  const projects = [
    {
      title: "My first Personal Portfolio",
      tech: [SiTailwindcss, SiHtml5, SiCss3, SiJavascript],
      Link: "https://khangdepzaivodich.github.io/Portfolio/",
      cover: "./project1.png",
      background: "bg-indigo-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0 flex flex-col justify-center items-center mt-0 sm:mt-10">
      <div className="font-bold text-3xl cursor-pointer underline underline-offset-8 decoration-blue-900">
        Projects
      </div>
      <div className="flex flex-wrap justify-center pt-20">
        {projects.map((project, idx) => {
          return (
            <Link href={project.Link} key={idx} target="_blank">
              <div className={cn("p-3 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full"
                >
                  <h1 className="text-lg font-bold">{project.title}</h1>
                  <div className="flex items-center gap-3">
                    {project.tech.map((Icon, idx) => {
                      return <Icon key={idx} size={25} />;
                    })}
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
