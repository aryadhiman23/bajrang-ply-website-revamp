'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductCarouselProps {
  images: string[]
  label: string
  /** Pass true for sections whose images are portrait / mixed orientation */
  contain?: boolean
}

export function ProductCarousel({ images, label, contain = false }: ProductCarouselProps) {
  const [current, setCurrent] = useState(0)
  const total = images.length

  const goPrev = () => setCurrent((c) => (c - 1 + total) % total)
  const goNext = () => setCurrent((c) => (c + 1) % total)

  return (
    <div className="w-full">
      <div className="relative">
        {/* Main image stage */}
        <div className="relative rounded-xl overflow-hidden bg-muted w-full" style={{ aspectRatio: '4/3' }}>
          {images.map((src, idx) => (
            <img
              key={src}
              src={src || '/placeholder.svg'}
              alt={`${label} — image ${idx + 1}`}
              className={`absolute inset-0 w-screen md:w-full h-full transition-opacity duration-500 ${contain ? 'object-contain p-2' : 'object-cover'} ${
                idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />
          ))}

          {/* Prev / Next buttons */}
          {total > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-card/90 text-foreground shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-card/90 text-foreground shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition z-10"
              >
                <ChevronRight size={20} />
              </button>

              {/* Counter badge */}
              <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-foreground/70 text-primary-foreground text-xs font-medium z-10">
                {current + 1} / {total}
              </div>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {total > 1 && (
          <div className="flex gap-1.5 mt-2 md:mt-3 overflow-x-auto pb-1 scrollbar-hide">
            {images.map((src, idx) => (
              <button
                key={src}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden transition bg-muted ${
                  idx === current ? 'ring-2 ring-primary opacity-100' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img src={src || '/placeholder.svg'} alt="" className={`w-full h-full ${contain ? 'object-contain p-1' : 'object-cover'}`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
