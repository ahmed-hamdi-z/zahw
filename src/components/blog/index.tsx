import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import useMeasure from "react-use-measure";
import HeadingSeparator from "../heading";
import { useTranslation } from "react-i18next";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Blog = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-neutral-100 py-8 rtl:text-end " ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto ">
          {" "}
          <HeadingSeparator title="Blog-tit" />
          <div className="flex items-center justify-between ">
            <span className="m-4"></span>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ id, imgUrl, title, description }: PostType) => {
  const { t } = useTranslation();

  return (
    <>
      <Link
        to={`/details/${id}`}
        key={id}
        className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
        style={{
          width: CARD_WIDTH,
          marginRight: MARGIN,
        }}
      >
        <img
          src={imgUrl}
          className="h-[200px] w-full rounded-lg object-cover"
          alt={`An image for a fake blog post titled ${title}`}
        />
        <p className="mt-2 text-lg font-medium">{t(title)}</p>
        <p className="text-sm mt-2 text-neutral-500 h-5 ">{t(description)}</p>
      </Link>
    </>
  );
};

export default Blog;

type PostType = {
  id: number;
  imgUrl: string;

  title: string;
  description: string[];
};

const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "/images/40.jpg",

    title: "Factors for the success",
    description: ["Factors for the success disc"],
  },
  {
    id: 2,
    imgUrl: "/images/63.jpg",

    title: "Lighting distribution factors",
    description: ["Lighting distribution factors disc"],
  },
  {
    id: 3,
    imgUrl: "/images/62.jpg",

    title: "The most popular interior decoration styles",
    description: ["The most popular interior decoration styles disc"],
  },
  {
    id: 4,
    imgUrl: "/images/55.jpg",

    title: "The art of beautification and influence in interior spaces",
    description: [
      "The art of beautification and influence in interior spaces disc",
    ],
  },
  {
    id: 5,
    imgUrl: "/images/58.jpg",

    title: "Interior design in 2024",
    description: ["Interior design in 2024 disc"],
  },
];
