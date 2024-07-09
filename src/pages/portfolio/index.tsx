import React, { FC, useState, useEffect, useCallback, useMemo } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import imagesData from './images.json';
import { useTranslation } from "react-i18next";

type ImageCategories = 'all' | 'residential' | 'commercial';

const Gallery: FC = () => {
  const [data, setData] = useState<{ img: string, i: number }>({ img: "", i: 0 });
  const [images, setImages] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<ImageCategories>('all');
  const { t } = useTranslation();
  useEffect(() => {
    // Load images from JSON based on the active tab
    setImages(imagesData[activeTab]);
  }, [activeTab]);

  const viewImage = useCallback((img: string, i: number) => {
    setData({ img, i });
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
  }, [images]);

  const galleryItems = useMemo(() => (
    images.map((image, i) => (
      <img
        key={i}
        src={image}
        className="xl:w-80 md:w-80 w-auto h-80 block cursor-pointer rounded-md"
        alt={`Gallery item ${i}`}
        onClick={() => viewImage(image, i)}
        loading="lazy"
      />
    ))
  ), [images, viewImage]);

  return (
    <>
      <div className="tabs flex justify-center space-x-4 mb-4 mt-36">
        <button
          className={`px-5 py-3 ml-3 rounded bg-[#764095] text-white  transition-colors ${activeTab === 'all' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          {t("Bedrooms")}
        </button>
        <button
          className={`px-5 py-2 rounded bg-[#764095] text-white  transition-colors ${activeTab === 'residential' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => setActiveTab('residential')}
        >
{t("Dining Rooms")}    
    </button>
        <button
          className={`px-5 py-2 rounded bg-[#764095] text-white  transition-colors ${activeTab === 'commercial' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => setActiveTab('commercial')}
        >
{t("Halls")}          </button>
      </div>
      <div className="p-3">
    
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
          <Masonry gutter="5px">
            {galleryItems}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {data.img && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
          <button onClick={() => imgAction('close')} className="absolute top-10 right-10 text-white text-3xl">X</button>
          <button onClick={() => imgAction('prev-img')} className="absolute left-10 text-white text-3xl"><FaArrowLeft /></button>
          <img src={data.img} className="w-auto max-w-[90%] max-h-[90%]" />
          <button onClick={() => imgAction('next-img')} className="absolute right-10 text-white text-3xl"><FaArrowRight /></button>
        </div>
      )}
     
    </>
  );
};

export default React.memo(Gallery);
