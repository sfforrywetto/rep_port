"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const cards = [
  { id: 1, title: "Blender", link: "/pages/project_gallery", image: "/images/projects/project1.png", desc: "My projects in Blender app. Some of my 3d Models and animations in it."},
  { id: 2, title: "Typografy", link: "/pages/project_gallery", image: "/images/projects/project2.svg", desc: "Typografiy projects. Posters, visitcards etc" },
  { id: 3, title: "IT/Webdesign", link: "/pages/project_gallery", image: "/images/projects/project3.png", desc:"My Web and It Projects. Some of Pre-Design and Mini-Desktopapps" },
  { id: 4, title: "Touch Designer", link: "/pages/project_gallery", image: "/images/projects/project4.png", desc: "TouchDesigner projects. Image editing and creating with maths functions. Abdolute Insane !" },
  { id: 5, title: "Blender", link: "/pages/project_gallery", image: "/images/projects/project6.png",  desc: "My projects in Blender app. Some of my 3d Models and animations in it."},
  { id: 6, title: "Touch Designer", link: "/pages/project_gallery", image: "/images/projects/project7.png", desc: "TouchDesigner projects. Image editing and creating with maths functions. Abdolute Insane !" },
  { id: 7, title: "IT/Webdesign", link: "/pages/project_gallery", image: "/images/projects/project8.png", desc:"My Web and It Projects. Some of Pre-Design and Mini-Desktopapps" },
];

export default function CardCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactionTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let frameId: number;

    const step = () => {
      if (!isInteracting && scrollRef.current) {
        scrollRef.current.scrollLeft += 0.5; // control speed here
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [isInteracting]);

  const handleInteraction = () => {
    setIsInteracting(true);
    if (interactionTimeout.current) clearTimeout(interactionTimeout.current);
    interactionTimeout.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2000); // resume after 2s of no interaction
  };

  return (
    <div ref={scrollRef} onWheel={handleInteraction} onTouchStart={handleInteraction} onTouchMove={handleInteraction} onMouseDown={handleInteraction} onScroll={handleInteraction} className="w-full overflow-x-scroll scroll-smooth whitespace-nowrap no-scrollbar bg-night py-6 cursor-grab active:cursor-grabbing relative top-[200px]" >
    <div className=" overflow-hidden w-full py-16">
      <div className="flex w-max animate-scroll space-x-4">
        {[...cards, ...cards].map((card, idx) => (
          <a
            href={card.link}
            key={idx}
            className="min-w-[250px] h-[180px] bg-white text-[#000000] rounded-xl shadow-lg p-4 flex flex-col justify-center items-center hover:scale-105 transition-transform"
          >
            <div className="w-full h-[120px] relative rounded overflow-hidden mb-3">
                <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                />
             </div>
            <p className="text-l font-bold text-center">{card.title}</p>
            <p className="text-sm  flex">{card.desc}</p>
          </a>
        ))}
      </div>
    </div>
    </div>
  );
}
