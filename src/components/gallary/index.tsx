import React, { FC, useState, useEffect, useCallback, useMemo } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FaArrowRight, FaArrowLeft, FaPlay, FaPause, FaExpand, FaCompress } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import imagesData from './images.json';
import HeadingSeparator from "../heading";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ImageData {
  img: string;
  i: number;
}

const Gallery: FC = () => {
  const [data, setData] = useState<ImageData>({ img: "", i: 0 });
  const [images, setImages] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Load images from JSON
    setImages(imagesData.images);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setData(prevData => {
          let i = prevData.i;
          if (i < images.length - 1) {
            return { img: images[i + 1], i: i + 1 };
          } else {
            return { img: images[0], i: 0 }; // loop back to the first image
          }
        });
      }, 3000); // change image every 3 seconds
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, images]);

  const viewImage = useCallback((img: string, i: number) => {
    setData({ img, i });
    setIsPlaying(false); // stop autoplay when an image is manually selected
  }, []);

  const imgAction = useCallback((action: string) => {
    setData(prevData => {
      let i = prevData.i;
      if (action === 'next-img' && i < images.length - 1) {
        return { img: images[i + 1], i: i + 1 };
      } else if (action === 'prev-img' && i > 0) {
        return { img: images[i - 1], i: i - 1 };
      } else if (action === 'close') {
        return { img: '', i: 0 };
      }
      return prevData;
    });
    setIsPlaying(false); // stop autoplay when image is manually changed
  }, [images]);

  const galleryItems = useMemo(() => (
    images.map((image, i) => (
      <img
        key={i}
        src={image}
        className="xl:w-80 md:w-80 w-auto h-80 block cursor-pointer rounded-md transition-transform md:transition-opacity duration-300 ease-in-out transform hover:scale-95 hover:opacity-50"
        alt={`Gallery item ${i}`}
        onClick={() => viewImage(image, i)}
        loading="lazy"
        onError={(e) => (e.currentTarget.src = '/images/placeholder.webp')}
      />
    ))
  ), [images, viewImage]);

  const thumbnailItems = useMemo(() => (
    images.map((image, i) => (
      <img
        key={`thumb-${i}`}
        src={image}
        className={`w-20 h-20 cursor-pointer m-1 rounded-md transition-transform duration-300 ease-in-out transform overflow-hidden ${i === data.i ? 'border-2 border-white' : 'hover:scale-105'}`}
        alt={`Thumbnail ${i}`}
        onClick={() => viewImage(image, i)}
        loading="lazy"
        onError={(e) => (e.currentTarget.src = '/images/placeholder.webp')}
      />
    ))
  ), [images, data.i, viewImage]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
     
      } else if (document.documentElement.requestFullscreen) { /* Chrome, Safari and Opera */
        document.documentElement.requestFullscreen();
 
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();

      } else if (document.exitFullscreen) { /* Chrome, Safari and Opera */
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const { t } = useTranslation();
  return (
    <>
      {data.img && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-slate-950 bg-opacity-90 flex flex-col justify-center items-center z-50"
          role="dialog"
          aria-labelledby="image-viewer"
        >
          <button
            onClick={() => imgAction('close')}
            className="absolute top-10 right-10 font-bold mt-1 w-7 h-7 text-white text-3xl"
            aria-label="Close"
          >
            <IoCloseSharp />
          </button>
          <button
            onClick={() => imgAction('prev-img')}
            className="absolute left-10 text-white text-3xl"
            aria-label="Previous Image"
          >
            <FaArrowLeft />
          </button>
          <img
            src={data.img}
            className="w-auto max-w-[90%] max-h-[70%]"
            alt="Enlarged view"
          />
          <button
            onClick={() => imgAction('next-img')}
            className="absolute right-10 text-white text-3xl"
            aria-label="Next Image"
          >
            <FaArrowRight />
          </button>
          <div className="mt-5 flex overflow-x-auto w-full justify-center">
            {thumbnailItems}
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white text-2xl mt-5 absolute top-0 right-20"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button
            onClick={toggleFullscreen}
            className="text-white text-2xl mt-5 absolute top-0 left-20"
            aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      )}
      <div className="p-3">
        <HeadingSeparator title="Our Gallery" />
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
          <Masonry gutter="5px">
            {galleryItems}
          </Masonry>
        </ResponsiveMasonry>
        <Link
          to="/portfolio"
          className="flex items-center justify-center gap-2 border-2  w-52 h-10 px-4 py-2 mx-auto mt-5 font-semibold border-[#764095] text-[#764095] transition-colors hover:bg-[#764095] hover:text-white"
        >
          <span>{t("Explore All Projects")}</span>
        </Link>
      </div>
    </>
  );
};

export default React.memo(Gallery);
