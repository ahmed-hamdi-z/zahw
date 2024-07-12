import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = ["/images/h-1.jpeg", "/images/h-2.jpeg", "/images/h-3.jpeg"];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((prev) => {
          if (prev === imgs.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-white xl:h-screen md:h-screen mt-8 ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <GradientEdges />
    </div>
  );
};

export default SwipeCarousel;

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((src, idx) => {
        return (
          <motion.div
            key={idx}
            animate={{
              scale: imgIndex === idx ? 1 : 1,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full shrink-0 flex justify-center items-center"
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${src})` }}
            />
          </motion.div>
        );
      })}
    </>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
