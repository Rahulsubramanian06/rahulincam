"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function SmoothScroll() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // disable browser restoring scroll
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }

    // force scroll to top
    setTimeout(()=>{
      window.scrollTo(0,0)
    },10)

  }, [])

  return null
}