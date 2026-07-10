"use client"

import { useEffect, useRef, useState } from "react"

export function useContainerHeight() {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const update = () => {
      setHeight(Math.floor(node.getBoundingClientRect().height))
    }

    update()

    const observer = new ResizeObserver(update)
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return { ref, height }
}
