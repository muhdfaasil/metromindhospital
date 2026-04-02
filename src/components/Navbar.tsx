import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home',            href: '#home' },
  { label: 'About',           href: '#about' },
  { label: 'Specialties',     href: '#specialties' },
  { label: 'Patient Journey', href: '#journey' },
  { label: 'Team',            href: '#team' },
  { label: 'Contact',         href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNav('#home') }}
            className="flex items-center gap-3 group"
            aria-label="Metro Mind Hospital Home"
          >
            <img
              src="/assets/logo.jpeg"
              alt="Metro Mind Hospital Logo"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-brand/30"
              width="40"
              height="40"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-brand-dark leading-tight">METRO MIND</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Made for Minds</p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" role="navigation" aria-label="Main navigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href) }}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917306808867"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-brand' : 'text-white/80 hover:text-white'
              }`}
              aria-label="Call Metro Mind Hospital"
            >
              <Phone size={15} />
              +91 73068 08867
            </a>
            <a
              href="#appointment"
              onClick={e => { e.preventDefault(); handleNav('#appointment') }}
              className="bg-brand-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1" role="navigation" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={e => { e.preventDefault(); handleNav(link.href) }}
                  className="block px-3 py-2.5 text-gray-700 hover:text-brand hover:bg-teal-50 rounded-lg font-medium text-sm transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <a
                  href="tel:+917306808867"
                  className="flex items-center gap-2 px-3 py-2.5 text-gray-600 hover:text-brand text-sm font-medium"
                >
                  <Phone size={15} />
                  +91 73068 08867
                </a>
                <a
                  href="#appointment"
                  onClick={e => { e.preventDefault(); handleNav('#appointment') }}
                  className="block w-full text-center bg-brand-gradient text-white font-semibold py-3 rounded-full"
                >
                  Book Appointment
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
