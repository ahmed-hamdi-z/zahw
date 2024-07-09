// Dependencies
import { FC } from "react";
import HeadingSeparator from "../heading";
import { Link } from "react-router-dom";

const images = [
  "/images/in1.jpg",
  "/images/in2.jpg",
  "/images/in3.jpg",
  "/images/in4.jpg",
  "/images/in5.jpg",
  "/images/in6.jpg",
  "/images/in7.jpg",
  "/images/in8.jpg"

];

const FollowUS: FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="w-full p-3">
           <HeadingSeparator title="Instagram" />
        </div>
       

        <Link to="https://www.instagram.com/zahwcontracting/" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              className="w-56 h-56 block cursor-pointer  "
              alt="Gallery item"
            />
          ))}
        </Link>
      </div>
    </>
  );
};

export default FollowUS;
