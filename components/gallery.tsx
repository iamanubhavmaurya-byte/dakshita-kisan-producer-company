import { Reveal, SectionHeading } from '@/components/reveal'
import { galleryImages } from '@/lib/site-data'

function spanClass(span?: string) {
  if (span === 'tall') return 'sm:row-span-2'
  if (span === 'wide') return 'sm:col-span-2'
  return ''
}

export function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Life across our fields"
            description="Farmers, crops, fields, harvests and the everyday work of collective agriculture."
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] lg:grid-cols-4">
          {galleryImages.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 4) * 0.06}
              className={`group relative overflow-hidden rounded-2xl shadow-sm ${spanClass(image.span)}`}
            >
              <img
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
