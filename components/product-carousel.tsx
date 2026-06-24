'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductCarouselProps {
  images: string[]
  label: string
}

export function ProductCarousel({ images, label }: ProductCarouselProps) {
  const [current, setCurrent] = useState(0)
  const total = images.length

  const goPrev = () => setCurrent((c) => (c - 1 + total) % total)
  const goNext = () => setCurrent((c) => (c + 1) % total)

  return (
    <div className="w-full">
      <div className="relative">
        {/* Main image stage */}
        <div className="relative rounded-xl overflow-hidden aspect-[4/3] md:aspect-[16/9] flex items-center justify-center">
          {images.map((src, idx) => (
            <img
              key={src}
              src={src || '/placeholder.svg'}
              alt={`${label} — image ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />
          ))}

          {/* Prev / Next buttons — always visible */}
          {total > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card text-foreground shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card text-foreground shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition z-10"
              >
                <ChevronRight size={24} />
              </button>

              {/* Counter badge */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-foreground/70 text-primary-foreground text-xs font-medium z-10">
                {current + 1} / {total}
              </div>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {total > 1 && (
          <div className="flex gap-1.5 md:gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
            {images.map((src, idx) => (
              <button
                key={src}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-lg overflow-hidden transition ${
                  idx === current ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img src={src || '/placeholder.svg'} alt="" className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
