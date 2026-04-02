import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Address',
    lines: ['South Kalamassery, Kochi', 'Kerala, India — 682033'],
    href: 'https://maps.app.goo.gl/n6qpDXJDhdAh2jjm8',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    lines: ['+91 73068 08867'],
    href: 'tel:+917306808867',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    lines: ['metromindhospital@gmail.com'],
    href: 'mailto:metromindhospital@gmail.com',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: 'Hours',
    lines: ['Mon–Fri: 9:00 AM – 6:00 PM', 'Saturday: 10:00 AM – 7:00 PM', '24/7 Emergency Line'],
    href: null,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="py-24 bg-gray-50 overflow-hidden" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Find Us
          </span>
          <h2
            id="contact-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
          >
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-500 text-lg">
            We're here to help. Reach out by phone, WhatsApp, or visit us in Kochi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Contact cards */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-gradient text-white flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                      {item.lines.map(l => (
                        <p key={l} className="text-gray-800 text-sm font-medium">{l}</p>
                      ))}
                    </a>
                  ) : (
                    item.lines.map(l => (
                      <p key={l} className="text-gray-800 text-sm font-medium">{l}</p>
                    ))
                  )}
                </div>
              </motion.div>
            ))}

            {/* Emergency note */}
            <div className="bg-brand/10 border border-brand/30 rounded-2xl p-4 text-center">
              <p className="text-brand-dark font-semibold text-sm">Psychiatric Emergency?</p>
              <a href="tel:+917306808867" className="text-2xl font-extrabold text-brand-dark font-heading hover:text-brand transition-colors">
                +91 73068 08867
              </a>
              <p className="text-gray-500 text-xs mt-1">Available 24/7</p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[450px]"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <iframe
              title="Metro Mind Hospital Location — South Kalamassery, Kochi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125.0!2d76.3163691!3d10.0548422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0061604aa9%3A0x845f9a1a4d8fa18b!2sUTHARAM+BY+Metromind!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Maps showing Metro Mind Hospital location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
