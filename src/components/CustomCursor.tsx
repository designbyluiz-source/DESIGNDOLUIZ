import { useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.css'

const PENCIL_SRC = `${import.meta.env.BASE_URL}cursor/pencil-cursor.svg`

const POINTER_SELECTOR =
  'a[href],button:not([disabled]),input[type="submit"],input[type="button"],input[type="checkbox"],input[type="radio"],label[for],select,[role="button"]:not([aria-disabled="true"]),[role="link"]'

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)
  const interactivePrev = useRef(false)
  const [enabled, setEnabled] = useState(false)
  const [interactive, setInteractive] = useState(false)

  useEffect(() => {
    const mqFine = window.matchMedia('(pointer: fine)')
    const mqRm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const docEl = document.documentElement

    let active = mqFine.matches && !mqRm.matches

    const syncClass = () => {
      active = mqFine.matches && !mqRm.matches
      setEnabled(active)
      docEl.classList.toggle('has-custom-cursor', active)
      if (!active) {
        interactivePrev.current = false
        setInteractive(false)
        rootRef.current?.classList.remove(styles.ready)
      }
    }

    const applyPosition = (x: number, y: number) => {
      const el = rootRef.current
      if (!el || !active) return
      el.style.transform = `translate3d(${x}px,${y}px,0)`
    }

    const onMove = (e: MouseEvent) => {
      if (!active) return
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => applyPosition(e.clientX, e.clientY))

      const below = document.elementFromPoint(e.clientX, e.clientY) as Element | null
      const ix = !!(below?.closest?.(POINTER_SELECTOR))
      if (ix !== interactivePrev.current) {
        interactivePrev.current = ix
        setInteractive(ix)
      }

      rootRef.current?.classList.add(styles.ready)
    }

    const onHideHint = () => {
      interactivePrev.current = false
      setInteractive(false)
      rootRef.current?.classList.remove(styles.ready)
    }

    syncClass()
    mqFine.addEventListener('change', syncClass)
    mqRm.addEventListener('change', syncClass)
    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onHideHint)
    window.addEventListener('blur', onHideHint)

    return () => {
      cancelAnimationFrame(rafRef.current)
      mqFine.removeEventListener('change', syncClass)
      mqRm.removeEventListener('change', syncClass)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onHideHint)
      window.removeEventListener('blur', onHideHint)
      docEl.classList.remove('has-custom-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${interactive ? styles.interactive : ''}`}
      aria-hidden
      data-cursor-mounted
    >
      <div className={styles.inner}>
        <img src={PENCIL_SRC} className={styles.pencil} alt="" draggable={false} />
      </div>
    </div>
  )
}
