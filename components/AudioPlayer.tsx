'use client';

import React, { useRef, useState, useEffect } from 'react';

interface RotatingCDPlayerProps {
  src: string;
  cdImage: string;
}

const RotatingCDPlayer: React.FC<RotatingCDPlayerProps> = ({ src, cdImage }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotation, setRotation] = useState(0);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [src]);

  const rotate = () => {
    setRotation((prev) => prev + 0.5); // Adjust speed here
    animationFrame.current = requestAnimationFrame(rotate);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    } else {
      audioRef.current.play();
      animationFrame.current = requestAnimationFrame(rotate);
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="w-20 h-20 rounded-full bg-cover bg-center shadow-lg cursor-pointer transition-transform duration-100"
        style={{
          backgroundImage: `url(${cdImage})`,
          transform: `rotate(${rotation}deg)`
        }}
        onClick={togglePlay}
      />
    </div>
  );
};

export default RotatingCDPlayer;