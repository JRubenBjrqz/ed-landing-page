
import { ref, onUnmounted, watch } from 'vue'

export function useCountUp(target: number, options?: { duration?: number; }) {
  const { duration = 2000 } = options || {}
  const value = ref(0)
  let raf = 0
  let started = false

  const start = () => {
    if (started) return
    started = true
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      value.value = Math.round(target * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
  }

  onUnmounted(() => {
    cancelAnimationFrame(raf)
  })

  watch(() => target, () => {
    value.value = 0
    started = false
  })

  return { value, start }
}
