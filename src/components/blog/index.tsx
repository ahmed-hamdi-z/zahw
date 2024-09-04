import { motion } from "framer-motion";
import { useState, useEffect} from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeadingSeparator from "../heading";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;


const BlogPostCarousel = () => {
  const [ref] = useMeasure();
  const [offset, setOffset] = useState(0);
  const [postsToShow, setPostsToShow] = useState(3); // Default to 3 posts

  // Track screen width and update postsToShow accordingly
  useEffect(() => {
    const updatePostsToShow = () => {
      const width = window.innerWidth;
      if (width < 768) { // Small screens (e.g., mobile)
        setPostsToShow(1);
      } else { // Large screens
        setPostsToShow(3);
      }
    };

    updatePostsToShow();
    window.addEventListener('resize', updatePostsToShow);

    return () => window.removeEventListener('resize', updatePostsToShow);
  }, []);

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - postsToShow);

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
    <section className="bg-white rtl:font-bien rtl:text-end w-full flex items-center justify-center" ref={ref}>
      <div className="relative overflow-hidden max-w-[70rem] p-2.5">
        <div className="mx-auto max-w-full">
          <div className="flex items-center justify-center">
            <HeadingSeparator title="Blog-tit" />
          </div>
          <div className=" w-full">
            <button
              className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity absolute top-96 left-0 z-50  ${
                CAN_SHIFT_LEFT ? "" : "opacity-30"
              }`}
              disabled={!CAN_SHIFT_LEFT}
              onClick={shiftLeft}
            >
              <FiArrowLeft />
            </button>
            <button
              className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity absolute top-96 right-0 z-50  ${
                CAN_SHIFT_RIGHT ? "" : "opacity-30"
              }`}
              disabled={!CAN_SHIFT_RIGHT}
              onClick={shiftRight}
            >
              <FiArrowRight />
            </button>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
            style={{
              width: posts.length * CARD_SIZE,
            }}
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
        className="mb-3 h-[200px] w-full object-cover"
        alt={`An image for a fake blog post titled ${title}`}
      />
      <p className="mt-1.5 text-lg font-medium">{t(title)}</p>
      <p className="text-sm mt-2 text-neutral-500 max-h-30 line-clamp-6">
        {t(description)}
      </p>
    </Link>
  );
};

export default BlogPostCarousel;

type PostType = {
  id: number;
  imgUrl: string;
  title: string;
  description: string[];
};

const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "/images/a3.jpg",
    title: "Factors for the success",
    description: ["Factors for the success disc"],
  },
  {
    id: 2,
    imgUrl: "/images/s40.jpg",
    title: "Lighting distribution factors",
    description: ["Lighting distribution factors disc"],
  },
  {
    id: 3,
    imgUrl: "/images/s22.jpg",
    title: "The most popular interior decoration styles",
    description: ["The most popular interior decoration styles disc"],
  },
  {
    id: 4,
    imgUrl: "/images/s20.jpg",
    title: "The art of beautification and influence in interior spaces",
    description: [
      "The art of beautification and influence in interior spaces disc",
    ],
  },
  {
    id: 5,
    imgUrl: "/images/s6.jpg",
    title: "Interior design in 2024",
    description: ["Interior design in 2024 disc"],
  },
];
