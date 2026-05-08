import { useCallback, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

function generateStars(count, color) {
  const shadows = []
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000
    const y = Math.floor(Math.random() * 4000) - 2000
    shadows.push(`${x}px ${y}px ${color}`)
  }
  return shadows.join(', ')
}

function StarLayer({ count = 1000, size = 1, duration = 50, color = '#fff' }) {
  const [shadow, setShadow] = useState('')
  useEffect(() => { setShadow(generateStars(count, color)) }, [count, color])
  return (
    <motion.div
      animate={{ y: [0, -2000] }}
      transition={{ repeat: Infinity, duration, ease: 'linear' }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2000px' }}
    >
      <div style={{ position: 'absolute', background: 'transparent', borderRadius: '9999px', width: `${size}px`, height: `${size}px`, boxShadow: shadow }} />
      <div style={{ position: 'absolute', background: 'transparent', borderRadius: '9999px', top: '2000px', width: `${size}px`, height: `${size}px`, boxShadow: shadow }} />
    </motion.div>
  )
}

export default function StarsBackground({ factor = 0.05, speed = 50, color = '#ffffff', children, style = {}, className = '' }) {
  const offsetX = useMotionValue(0)
  const offsetY = useMotionValue(0)
  const springX = useSpring(offsetX, { stiffness: 50, damping: 20 })
  const springY = useSpring(offsetY, { stiffness: 50, damping: 20 })

  const handleMouseMove = useCallback((e) => {
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    offsetX.set(-(e.clientX - cx) * factor)
    offsetY.set(-(e.clientY - cy) * factor)
  }, [factor, offsetX, offsetY])

  return (
    <div
      onMouseMove={handleMouseMove}
      className={className}
      style={{
        position: 'absolute', inset: 0, overflow: 'hidden',
        background: 'radial-gradient(ellipse at bottom, #0a1118 0%, #000 100%)',
        ...style,
      }}
    >
      <motion.div style={{ x: springX, y: springY, width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
        <StarLayer count={1000} size={1} duration={speed} color={color} />
        <StarLayer count={400}  size={2} duration={speed * 2} color={color} />
        <StarLayer count={200}  size={3} duration={speed * 3} color={color} />
      </motion.div>
      {children}
    </div>
  )
}
