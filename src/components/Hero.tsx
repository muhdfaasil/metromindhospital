import { motion } from 'framer-motion'
import { ChevronDown, Calendar, MessageCircle } from 'lucide-react'

const words = ['Precision.', 'Science.', 'Compassion.']

export default function Hero() {
  const scrollToNext = () => {
    document.querySelector('#stats')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-brand-darker" />
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/building1.jpeg)` }} />

      {/* Animated neural network circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-brand/20"
            style={{
              width:  `${(i + 1) * 180}px`,
              height: `${(i + 1) * 180}px`,
              top:    '50%',
              left:   '50%',
              x:      '-50%',
              y:      '-50%',
            }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.15, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand/20 border border-brand/40 text-brand-light text-sm font-medium px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          Kerala's Leading Neuropsychiatry Hospital · Kochi
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Metro Mind —<br />
          <span className="text-gradient">Made for Minds</span>
        </motion.h1>

        {/* Animated word swap */}
        <div className="h-14 sm:h-16 flex items-center justify-center mb-6 overflow-hidden">
          {words.map((word, i) => (
            <motion.p
              key={word}
              className="absolute font-heading text-2xl sm:text-3xl text-brand-light font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y:       [20, 0, 0, -20],
              }}
              transition={{
                duration: 3,
                delay:    i * 3,
                repeat:   Infinity,
                repeatDelay: (words.length - 1) * 3,
              }}
            >
              {word}
            </motion.p>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We don't guess. We <strong className="text-white">measure</strong>. We <strong className="text-white">personalize</strong>.<br className="hidden sm:block" />
          Neuroscience-based psychiatry at South Kalamassery, Kochi.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <a
            href="#appointment"
            onClick={e => { e.preventDefault(); document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="group flex items-center gap-2 bg-brand-gradient text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-brand/40 hover:scale-105 transition-all duration-200 text-base"
          >
            <Calendar size={18} />
            Book Appointment
          </a>
          <a
            href="https://wa.me/917306808867?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 border border-white/30 backdrop-blur text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200 text-base"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-14 text-white/50 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {['4.9★ Patient Rating', '7+ Years Experience', '24/7 Emergency Care', '8 Specialties'].map(item => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
        onClick={scrollToNext}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}
