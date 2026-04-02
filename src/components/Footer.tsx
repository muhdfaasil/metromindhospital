import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-2" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const navGroups = [
  {
    title: 'Hospital',
    links: [
      { label: 'About Us',      href: '#about' },
      { label: 'Our Team',      href: '#team' },
      { label: 'Patient Journey', href: '#journey' },
      { label: 'Contact',       href: '#contact' },
    ],
  },
  {
    title: 'Specialties',
    links: [
      { label: 'Precision Psychiatry',    href: '#specialties' },
      { label: 'qEEG & Brain Mapping',    href: '#specialties' },
      { label: 'rTMS & Neuromodulation',  href: '#specialties' },
      { label: 'De-Addiction Programs',   href: '#specialties' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Book Appointment', href: '#appointment' },
      { label: 'WhatsApp Us',      href: 'https://wa.me/917306808867' },
      { label: 'Call: +91 73068 08867', href: 'tel:+917306808867' },
      { label: 'metromindhospital@gmail.com', href: 'mailto:metromindhospital@gmail.com' },
    ],
  },
]

const socials = [
  { icon: <FacebookIcon />, href: 'https://facebook.com/metromindhospital', label: 'Facebook' },
  { icon: <InstagramIcon />, href: 'https://instagram.com/metromindhospital', label: 'Instagram' },
  { icon: <YoutubeIcon />, href: 'https://youtube.com/@metromindhospital', label: 'YouTube' },
  { icon: <LinkedinIcon />, href: 'https://linkedin.com/company/metromindhospital', label: 'LinkedIn' },
]

export default function Footer() {
  const handleNav = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div>
            <a href="#home" onClick={e => { e.preventDefault(); handleNav('#home') }} className="flex items-center gap-3 mb-5" aria-label="Metro Mind Hospital">
              <img
                src={`${import.meta.env.BASE_URL}assets/logo.jpeg`}
                alt="Metro Mind Hospital Logo"
                className="w-12 h-12 rounded-full ring-2 ring-brand/40 object-cover"
                width="48"
                height="48"
              />
              <div>
                <p className="font-bold text-white leading-tight font-heading">METRO MIND</p>
                <p className="text-xs text-brand-light tracking-widest uppercase">Made for Minds</p>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Kerala's leading neuropsychiatry hospital in Kochi. Precision psychiatry, neuroscience-based care, and compassionate recovery support.
            </p>
            <div className="flex gap-3">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-gradient flex items-center justify-center transition-all duration-200 hover:scale-110"
                  whileHover={{ scale: 1.15 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map(group => (
            <div key={group.title}>
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">{group.title}</h3>
              <ul className="space-y-3" role="list">
                {group.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={link.href.startsWith('#') ? e => { e.preventDefault(); handleNav(link.href) } : undefined}
                      className="text-gray-400 hover:text-brand-light text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Metro Mind Neuropsychiatry Hospital. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={14} className="text-rose-400 fill-rose-400" aria-label="love" /> for mental wellness
          </p>
        </div>
      </div>
    </footer>
  )
}
