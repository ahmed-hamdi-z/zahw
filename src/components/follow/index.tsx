// Dependencies
import { FC } from "react";
import HeadingSeparator from "../heading";
import { Link } from "react-router-dom";

const images = [
  "/images/s19.jpg",
  "/images/s12.jpg",
  "/images/s15.jpg",
  "/images/s4.jpg",
  "/images/t3.jpg",
  "/images/t5.jpg",
  "/images/a47.jpg",
  "/images/a33.jpg"
];

const FollowUS: FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-2 ">
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
