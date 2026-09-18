import { ImagePlus, ZoomIn } from 'lucide-react'
import { useMemo, useState } from 'react'
import { GALLERY_CATEGORIES, GALLERY_ITEMS, type GalleryFilter } from '../../data/gallery'
import { Lightbox } from '../gallery/Lightbox'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/SectionHeading'

export function Gallery() {
  const [filter, setFilter] = useState<GalleryFilter>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const items = useMemo(
    () => (filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter)),
    [filter],
  )

  return (
    <section id="gallery" className="bg-pattern py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Impact in Action</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Photo & Outreach Gallery
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
              Moments of community solidarity, empowerment sessions, and executive meetings across Nigeria.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos">
            {GALLERY_CATEGORIES.map((category) => {
              const active = filter === category.id
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setFilter(category.id)}
                  aria-pressed={active}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                    active ? 'bg-emerald-800 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {items.length === 0 ? (
            <div className="col-span-full py-12 text-center text-slate-500">
              <p className="text-lg">No photos found under this category yet.</p>
            </div>
          ) : (
            items.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 80}>
                <article className="gallery-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-700/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                        <ZoomIn className="h-4 w-4" aria-hidden />
                        Click to expand
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-emerald-900 shadow-sm backdrop-blur-sm">
                      {item.categoryLabel ?? item.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                        <span>{item.date ?? 'Movement Event'}</span>
                      </div>
                      <h3 className="text-base leading-snug font-bold text-slate-800 transition-colors group-hover:text-emerald-800">
                        {item.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-slate-600">{item.caption}</p>
                    </div>
                  </div>
                  {/* Covers the whole card so it is clickable and keyboard-focusable */}
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`View photo: ${item.title}`}
                    className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-offset-4"
                  />
                </article>
              </Reveal>
            ))
          )}
        </div>

        {/* Extensibility note */}
        <Reveal className="mt-12">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-emerald-200/80 bg-emerald-50/80 p-6 sm:flex-row">
            <div className="flex items-center gap-3 text-sm text-emerald-900">
              <ImagePlus className="h-5 w-5 flex-shrink-0 text-emerald-700" aria-hidden />
              <span>
                <strong>Continuous NGO Documentation:</strong> As new outreaches and workshops occur, photos are
                seamlessly integrated into the gallery archive.
              </span>
            </div>
            <a
              href="#contact"
              className="text-xs font-bold whitespace-nowrap text-emerald-800 underline hover:text-emerald-950 sm:text-sm"
            >
              Share Event Photos With Us &rarr;
            </a>
          </div>
        </Reveal>
      </div>

      <Lightbox
        items={items}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </section>
  )
}
