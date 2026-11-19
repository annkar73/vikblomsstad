
"use client";

import { useState } from "react";
import Image from "next/image";

type CarouselImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ManualCarouselProps = {
  images: CarouselImage[];
  label?: string;
};

export default function ManualCarousel({
  images,
  label = "Bildgalleri",
}: ManualCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  function showPrevious() {
    setActiveIndex(
      (current) => (current - 1 + images.length) % images.length
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % images.length);
  }

  return (
    <section className="manual-carousel" aria-label={label}>
      <div className="manual-carousel-stage">
        {images.map((image, index) => {
          const position =
            (index - activeIndex + images.length) % images.length;

          const isPrevious = position === images.length - 1;
          const isNext = position === 1;
          const isActive = position === 0;

          if (!isPrevious && !isNext && !isActive) return null;

          return (
            <div
              className={`manual-carousel-slide ${
                isActive ? "is-active" : isPrevious ? "is-previous" : "is-next"
              }`}
              key={image.src}
            >
              <Image
                src={image.src}
                alt={isActive ? image.alt : ""}
                width={900}
                height={650}
                sizes="(max-width: 640px) 78vw, 60vw"
                priority={isActive}
              />
                {isActive && image.caption && (
                <p className="manual-carousel-caption" aria-live="polite">
                  {image.caption}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="manual-carousel-controls">
        <button
          type="button"
          className="manual-carousel-button"
          onClick={showPrevious}
          aria-label="Föregående bild"
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          className="manual-carousel-button"
          onClick={showNext}
          aria-label="Nästa bild"
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
