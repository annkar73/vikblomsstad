
"use client";

import Image from "next/image";

type CarouselImage = {
  src: string;
  alt: string;
};

type AutoCarouselProps = {
  images: CarouselImage[];
};

export default function AutoCarousel({ images }: AutoCarouselProps) {
  if (images.length === 0) return null;

  return (
    <section className="auto-carousel" aria-label="Utomhusuppdrag">
      <div className="auto-carousel-track">
        {[0, 1].map((copy) => (
          <div
            className="auto-carousel-group"
            key={copy}
            aria-hidden={copy === 1}
          >
            {images.map((image, index) => (
              <div className="auto-carousel-item" key={`${copy}-${index}`}>
                <Image
                  src={image.src}
                  alt={copy === 0 ? image.alt : ""}
                  width={640}
                  height={440}
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
