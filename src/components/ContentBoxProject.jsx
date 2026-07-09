"use client";

import { useRef } from "react";

export default function ContentBoxProject({
  logo,
  img,
  video,
  name,
  url,
  description,
  imgPosition = "object-center",
  aspect = "aspect-[2/1]",
}) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    const el = videoRef.current;
    if (el) {
      el.play();
    }
  };

  const handleMouseLeave = () => {
    const el = videoRef.current;
    if (el) {
      el.pause();
      el.currentTime = 0;
      el.load();
    }
  };

  return (
    <div className="w-full mb-6 sm:mb-0 group">
      <div className="relative w-full mb-4">
        {logo && (
          <img
            src={logo}
            alt="Project logo"
            className="absolute w-4/6 sm:w-1/2 left-5 bottom-5 z-10"
          />
        )}
        <a
          href={url}
          target="_blank"
          className="block overflow-hidden rounded-lg"
          onMouseEnter={video ? handleMouseEnter : undefined}
          onMouseLeave={video ? handleMouseLeave : undefined}
        >
          {video ? (
            <video
              ref={videoRef}
              poster={img}
              muted
              loop
              playsInline
              preload="metadata"
              className={`w-full ${aspect} object-cover ${imgPosition} transition-transform duration-300 ease-out group-hover:scale-[1.03]`}
            >
              <source src={`${video}.webm`} type="video/webm" />
              <source src={`${video}.mp4`} type="video/mp4" />
            </video>
          ) : (
            <img
              src={img}
              alt="Visit the project page"
              className={`w-full ${aspect} object-cover ${imgPosition} transition-transform duration-300 ease-out group-hover:scale-[1.03]`}
            />
          )}
        </a>
      </div>
      <div>
        <p className="text-xl">
          <a href={url} target="_blank" className="font-extrabold underline">
            {name}
          </a>{" "}
          {description}
        </p>
      </div>
    </div>
  );
}
