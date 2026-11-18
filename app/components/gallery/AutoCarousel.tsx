
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type CarouselImage = {
  src: string;
  alt: string;
};

type AutoCarouselProps = {
  images: CarouselImage[];
};

export default function AutoCarousel({ images }: AutoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <section className="auto-carousel" aria-label="Utomhusuppdrag">
      <div className="auto-carousel-stage">
        {images.map((image, index) => {
          const position =
            (index - activeIndex + images.length) % images.length;

          const isActive = position === 0;
          const isNext = position === 1;
          const isPrevious = position === images.length - 1;

          if (!isActive && !isNext && !isPrevious) return null;

          return (
            <div
              key={image.src}
              className={`auto-carousel-item ${
                isActive
                  ? "is-active"
                  : isPrevious
                    ? "is-previous"
                    : "is-next"
              }`}
            >
              <Image
                src={image.src}
                alt={isActive ? image.alt : ""}
                width={640}
                height={440}
                sizes="(max-width: 640px) 76vw, 340px"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
