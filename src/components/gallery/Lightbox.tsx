import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryItem } from '../../data/gallery'
import { Modal } from '../ui/Modal'

interface LightboxProps {
  items: GalleryItem[]
  /** Index into `items` of the photo on show, or null when closed */
  index: number | null
  onIndexChange: (index: number) => void
  onClose: () => void
}

export function Lightbox({ items, index, onIndexChange, onClose }: LightboxProps) {
  const item = index === null ? undefined : items[index]

  const step = (delta: number) => {
    if (index === null || items.length === 0) return
    onIndexChange((index + delta + items.length) % items.length)
  }

  const navButton =
    'absolute top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-lg bg-white/10 p-3 text-white transition-colors hover:bg-white/20 hover:text-amber-400 sm:flex'

  return (
    <Modal
      open={item !== undefined}
      onClose={onClose}
      labelledBy="lightbox-title"
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') step(-1)
        if (event.key === 'ArrowRight') step(1)
      }}
    >
      {item && (
        <>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo"
            className="absolute top-4 right-4 z-20 rounded-lg bg-white/10 p-2 text-white transition-colors hover:bg-white/20 hover:text-amber-400"
          >
            <X className="h-6 w-6" />
          </button>
          <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className={`${navButton} left-4`}>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next photo" className={`${navButton} right-4`}>
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="modal-fade-in relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
            <div className="relative flex max-h-[65vh] min-h-[300px] flex-1 items-center justify-center overflow-hidden bg-black/40">
              <img key={item.id} src={item.src} alt={item.title} className="max-h-[65vh] w-auto max-w-full object-contain" />
            </div>
            <div className="flex flex-col justify-between gap-3 border-t border-slate-800 bg-slate-900 p-5 text-white sm:flex-row sm:items-center">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="rounded bg-emerald-800 px-2 py-0.5 text-[11px] font-bold text-emerald-200">
                    {item.categoryLabel ?? item.category}
                  </span>
                  <span className="text-xs text-slate-400" aria-live="polite">
                    {(index ?? 0) + 1} of {items.length}
                  </span>
                </div>
                <h2 id="lightbox-title" className="text-base font-bold text-white sm:text-lg">
                  {item.title}
                </h2>
                <p className="mt-1 max-w-2xl text-xs text-slate-300 sm:text-sm">{item.caption}</p>
              </div>
              <div className="flex items-center justify-between border-t border-slate-800 pt-2 sm:hidden">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="rounded bg-slate-800 px-3 py-1.5 text-xs font-semibold text-white"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="rounded bg-slate-800 px-3 py-1.5 text-xs font-semibold text-white"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Modal>
  )
}
