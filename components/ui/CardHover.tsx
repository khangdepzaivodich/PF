import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";

export const CardHover = ({
  items,
  className,
}: {
  items: {
    title: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.Icon;
        return (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-ful bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-md w-full p-4 px-10 overflow-hidden border border-gray-800 bg-black group-hover:ring-2 ring-indigo-500 relative z-20 transition-all duration-500 cursor-pointer">
              <div className="py-10 z-50 relative space-y-5 flex flex-col justify-center items-center">
                <Icon size={35} />
                <p className="text-2xl font-bold text-center text-gray-300">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
