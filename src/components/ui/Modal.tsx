import { useLayoutEffect, useRef, type KeyboardEvent, type ReactNode } from 'react'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

interface ModalProps {
  open: boolean
  onClose: () => void
  /** id of the element that names the dialog */
  labelledBy: string
  onKeyDown?: (event: KeyboardEvent<HTMLDialogElement>) => void
  children: ReactNode
}

/**
 * Full-screen modal built on the native <dialog> element, which provides the
 * top layer, Esc-to-close, focus containment and focus restore for free.
 * Clicking outside the content (on the dialog itself) closes it.
 */
export function Modal({ open, onClose, labelledBy, onKeyDown, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)
  useLockBodyScroll(open)

  // Layout effect so the dialog opens/closes in the same frame its content changes
  useLayoutEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none items-center justify-center border-0 bg-transparent p-4 open:flex sm:p-6"
    >
      {children}
    </dialog>
  )
}
