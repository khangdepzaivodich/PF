import React from "react";
import Title from "./Title";
import { SiFacebook, SiGithub, SiYoutube } from "react-icons/si";
import Link from "next/link";
import { cn } from "@/utils/cn";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      Link: "https://www.facebook.com/profile.php?id=100089034453474",
      Label: "Facebook",
      Icon: SiFacebook,
    },
    {
      Link: "https://github.com/khangdepzaivodich",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: "https://www.youtube.com/@blackc7396",
      Label: "Youtube",
      Icon: SiYoutube,
    },
  ];
  return (
    <nav
      className={cn(
        "relative z-20 flex justify-between items-center py-8 w-full",
        className
      )}
    >
      <Title />
      <div className="flex items-center gap-5 ">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link
              href={social.Link}
              key={index}
              aria-label={social.Label}
              className="cursor-pointer hover:scale-150 transition-all"
              target="_blank"
            >
              <Icon size={25} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
