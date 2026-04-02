import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Award, Clock, Stethoscope } from 'lucide-react'

interface StatItem {
  icon: React.ReactNode
  value: string
  numericEnd: number
  suffix: string
  prefix?: string
  label: string
  description: string
}

const stats: StatItem[] = [
  {
    icon: <Star className="w-7 h-7" />,
    value: '4.9',
    numericEnd: 49,
    suffix: '/5',
    label: 'Patient Rating',
    description: 'Consistently rated by our patients',
  },
  {
    icon: <Award className="w-7 h-7" />,
    value: '7+',
    numericEnd: 7,
    suffix: '+',
    label: 'Years Experience',
    description: 'In specialized neuropsychiatric care',
  },
  {
    icon: <Clock className="w-7 h-7" />,
    value: '24/7',
    numericEnd: 24,
    suffix: '/7',
    label: 'Emergency Care',
    description: 'Round-the-clock psychiatric support',
  },
  {
    icon: <Stethoscope className="w-7 h-7" />,
    value: '8',
    numericEnd: 8,
    suffix: '',
    label: 'Specialties',
    description: 'Comprehensive neuropsychiatric services',
  },
]

function AnimatedNumber({ end, suffix, isDecimal }: { end: number; suffix: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress === 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  const display = isDecimal ? (count / 10).toFixed(1) : count

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="stats" ref={ref} className="py-16 bg-white" aria-label="Hospital statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-gradient text-white mb-4 mx-auto shadow-md group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-brand-dark font-heading mb-1">
                {stat.label === 'Patient Rating' ? (
                  <AnimatedNumber end={49} suffix="/5" isDecimal />
                ) : stat.label === 'Emergency Care' ? (
                  <span>24/7</span>
                ) : (
                  <AnimatedNumber end={stat.numericEnd} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-gray-800 font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs leading-relaxed">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
