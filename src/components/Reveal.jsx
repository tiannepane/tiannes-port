import { useEffect, useRef, useState } from 'react'

function useInView(options = { threshold: 0.1, once: true }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true)
          if (options.once) obs.unobserve(el)
        } else if (!options.once) {
          setInView(false)
        }
      })
    }, { threshold: options.threshold ?? 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

export default function Reveal({ delay = 0, as: Tag = 'div', className = '', style = {}, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`${className} ${inView ? 'animate-fade-in-up' : ''}`.trim()}
      style={{ ...style, animationDelay: `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
