import React, { FC, useState, useEffect, useCallback, useMemo } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaPause,
  FaExpand,
  FaCompress,
  FaSearchPlus,
  FaSearchMinus,
} from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import imagesData from "./images.json";
import { useTranslation } from "react-i18next";

type ImageCategories = "all" | "residential" | "commercial";

const Gallery: FC = () => {
  const [data, setData] = useState<{ img: string; i: number }>({
    img: "",
    i: 0,
  });
  const [images, setImages] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<ImageCategories>("all");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const { t } = useTranslation();

  useEffect(() => {
    // Load images from JSON based on the active tab
    setImages(imagesData[activeTab]);
  }, [activeTab]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setData((prevData) => {
          let i = prevData.i;
          if (i < images.length - 1) {
            return { img: images[i + 1], i: i + 1 };
          } else {
            return { img: images[0], i: 0 };
          }
        });
      }, 3000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, images]);

  const viewImage = useCallback((img: string, i: number) => {
    setData({ img, i });
    setIsPlaying(false);
    setZoomLevel(1); // Reset zoom level when viewing a new image
  }, []);

  const imgAction = useCallback(
    (action: string) => {
      setData((prevData) => {
        let i = prevData.i;
        if (action === "next-img" && i < images.length - 1) {
          return { img: images[i + 1], i: i + 1 };
        } else if (action === "prev-img" && i > 0) {
          return { img: images[i - 1], i: i - 1 };
        } else if (action === "close") {
          return { img: "", i: 0 };
        }
        return prevData;
      });
      setIsPlaying(false);
      setZoomLevel(1); // Reset zoom level when closing the image
    },
    [images]
  );

  const galleryItems = useMemo(
    () =>
      images.map((image, i) => (
        <img
          key={i}
          src={image}
          className="xl:w-80 md:w-80 w-auto  h-80 block cursor-pointer rounded-md transition-transform md:transition-opacity duration-300 ease-in-out transform hover:scale-95 hover:opacity-50"
          alt={`Gallery item ${i}`}
          onClick={() => viewImage(image, i)}
          loading="lazy"
          onError={(e) => (e.currentTarget.src = "/images/placeholder.webp")}
        />
      )),
    [images, viewImage]
  );

  const thumbnailItems = useMemo(
    () =>
      images.map((image, i) => (
        <img
          key={`thumb-${i}`}
          src={image}
          className={`w-20 h-20 cursor-pointer m-1 rounded-md transition-transform duration-300 ease-in-out transform  ${
            i === data.i ? "border-2 border-white" : "hover:scale-105"
          }`}
          alt={`Thumbnail ${i}`}
          onClick={() => viewImage(image, i)}
          loading="lazy"
          onError={(e) => (e.currentTarget.src = "/images/placeholder.webp")}
        />
      )),
    [images, data.i, viewImage]
  );

  const toggleFullscreen = () => {
    const element = document.documentElement;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 3)); // Cap zoom level at 3
  };

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 1)); // Minimum zoom level at 1
  };

  return (
    <>
      {data.img && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-slate-950 bg-opacity-90 flex flex-col justify-center items-center z-50"
          role="dialog"
          aria-labelledby="image-viewer"
        >
          <button
            onClick={() => imgAction("close")}
            className="absolute top-10 right-10 font-bold mt-1 w-7 h-7 text-white text-3xl z-50"
            aria-label="Close"
          >
            <IoCloseSharp />
          </button>
          <button
            onClick={() => imgAction("prev-img")}
            className="absolute left-10 text-white text-3xl z-50"
            aria-label="Previous Image"
          >
            <FaArrowLeft />
          </button>
          <img
            src={data.img}
            className="w-auto max-w-[90%] max-h-[70%]"
            alt="Enlarged view"
            style={{ transform: `scale(${zoomLevel})` }}
          />
          <button
            onClick={() => imgAction("next-img")}
            className="absolute right-10 text-white text-3xl z-50"
            aria-label="Next Image"
          >
            <FaArrowRight />
          </button>
          <div className="mt-5 flex overflow-x-hidden w-full justify-center">
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
          <button
            onClick={zoomIn}
            className="text-white text-2xl mt-5 absolute top-0 left-32"
            aria-label="Zoom In"
          >
            <FaSearchPlus />
          </button>
          <button
            onClick={zoomOut}
            className="text-white text-2xl mt-5 absolute top-0 left-40"
            aria-label="Zoom Out"
          >
            <FaSearchMinus />
          </button>
        </div>
      )}
      <div className="tabs flex rtl:font-bien flex-wrap items-center justify-center space-x-4 mb-4 mt-24 h-auto">
        <button
          className={`md:mt-2 mt-2 px-4 md:px-5 py-2 md:py-3 rounded bg-[#764095] rtl:ml-3 text-white transition-colors ${
            activeTab === "all" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setActiveTab("all")}
        >
          {t("All")}
        </button>
        <button
          className={`md:mt-2 mt-2 px-4 md:px-5 py-2 md:py-3 rounded bg-[#764095] text-white transition-colors ${
            activeTab === "residential" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setActiveTab("residential")}
        >
          {t("Residential")}
        </button>
        <button
          className={`mt-2 md:mt-5 px-4 md:px-5 py-2 md:py-3 rounded bg-[#764095] text-white transition-colors ${
            activeTab === "commercial" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setActiveTab("commercial")}
        >
          {t("Commercial")}
        </button>
      </div>
      <div className="p-3">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
        >
          <Masonry gutter="5px">{galleryItems}</Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default React.memo(Gallery);
