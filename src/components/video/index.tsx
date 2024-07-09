// Dependencies
import { FC } from "react";

// assets
import videoBg from "/images/zahw.mp4";

const Video: FC = () => {
  return (
    <div className="w-[100%] h-[100vh]">
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-15"></div>

      <video
        className="w-[100%] h-[83%] object-cover bg-center bg-cover mt-[110px]"
        src={videoBg}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Video;
