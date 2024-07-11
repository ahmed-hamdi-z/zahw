import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeadingSeparator from "@/components/heading";

const CARD_WIDTH = 350;
const MARGIN = 20;

const Blog = () => {
  return (
    <>

      <div className="flex flex-col items-center mt-10">
        <div className="w-full">
            <HeadingSeparator title="Blog-tit" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto mb-10">
          {posts.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </div>
      </div>
    </>
  );  
};

export const Post = ({ id, imgUrl, title, description }: PostType) => {
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
        <p className="text-sm mt-2 text-neutral-500 max-h-30 line-clamp-6">
          {t(description)}
        </p>
      </Link>
    </>
  );
};

export default Blog;

export type PostType = {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
};

export const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "/images/40.jpg",
    title: "Factors for the success",
    description: "Factors for the success disc",
  },
  {
    id: 2,
    imgUrl: "/images/63.jpg",
    title: "Lighting distribution factors",
    description: "Lighting distribution factors disc",
  },
  {
    id: 3,
    imgUrl: "/images/62.jpg",
    title: "The most popular interior decoration styles",
    description: "The most popular interior decoration styles disc",
  },
  {
    id: 4,
    imgUrl: "/images/55.jpg",
    title: "The art of beautification and influence in interior spaces",
    description: "The art of beautification and influence in interior spaces disc",
  },
  {
    id: 5,
    imgUrl: "/images/58.jpg",
    title: "Interior design in 2024",
    description: "Interior design in 2024 disc",
  },
];
