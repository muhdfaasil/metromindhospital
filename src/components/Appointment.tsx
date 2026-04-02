import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Calendar, User, Phone, Mail, ChevronDown, CheckCircle2, Stethoscope } from 'lucide-react'

const services = [
  'Precision Psychiatry',
  'qEEG & Brain Mapping',
  'rTMS & Neuromodulation',
  'Ketamine-Assisted Psychotherapy',
  'Genetics-Informed Psychiatry',
  'Psychotherapy & Counselling',
  'De-Addiction & Recovery',
  'General Consultation',
]

export default function Appointment() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)
  const serviceRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', date: '', message: '',
  })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) {
        setServiceOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // WhatsApp deep link with form data pre-filled
    const msg = encodeURIComponent(
      `Hello Metro Mind Hospital,\n\nI'd like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nPreferred Date: ${form.date}\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/917306808867?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="appointment" ref={ref} className="py-24 bg-white overflow-hidden" aria-labelledby="appointment-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-brand font-semibold text-sm uppercase tracking-widest mb-3">
              Get Started
            </span>
            <h2
              id="appointment-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              Book Your <span className="text-gradient">Appointment</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Take the first step toward better mental health. Our team will reach out to confirm
              your appointment within 2 hours.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                { icon: <Phone className="w-5 h-5" />, label: 'Call Us', value: '+91 73068 08867', href: 'tel:+917306808867' },
                { icon: <Mail className="w-5 h-5" />,  label: 'Email',   value: 'metromindhospital@gmail.com', href: 'mailto:metromindhospital@gmail.com' },
                { icon: <Calendar className="w-5 h-5" />, label: 'Hours', value: 'Mon–Fri 9am–6pm · Sat 10am–7pm', href: null },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-brand-gradient text-white flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-800 font-semibold text-sm hover:text-brand transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-semibold text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="w-16 h-16 text-brand mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                <p className="text-gray-500">Your WhatsApp message has been prepared. We'll confirm your appointment shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand font-semibold text-sm hover:underline"
                >
                  Book another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Appointment booking form">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">Fill in your details</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" aria-hidden="true" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      aria-label="Full name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" aria-hidden="true" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                      aria-label="Phone number"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative mb-4">
                  <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" aria-hidden="true" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    aria-label="Email address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors"
                  />
                </div>

                {/* Service */}
                <div className="relative mb-4" ref={serviceRef}>
                  <button
                    type="button"
                    onClick={() => setServiceOpen(o => !o)}
                    aria-haspopup="listbox"
                    aria-expanded={serviceOpen}
                    className={`w-full flex items-center gap-3 px-4 py-3 border rounded-xl text-sm transition-colors text-left ${
                      serviceOpen ? 'border-brand ring-2 ring-brand/40' : 'border-gray-200'
                    } ${form.service ? 'text-gray-800' : 'text-gray-400'}`}
                  >
                    <Stethoscope className="w-4 h-4 text-gray-400 shrink-0" aria-hidden="true" />
                    <span className="flex-1">{form.service || 'Select a Service'}</span>
                    <motion.span animate={{ rotate: serviceOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-4 h-4 text-gray-400" aria-hidden="true" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {serviceOpen && (
                      <motion.ul
                        role="listbox"
                        aria-label="Select a service"
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute z-50 mt-1 w-full bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden"
                      >
                        {services.map(s => (
                          <li
                            key={s}
                            role="option"
                            aria-selected={form.service === s}
                            onClick={() => {
                              setForm(f => ({ ...f, service: s }))
                              setServiceOpen(false)
                            }}
                            className={`flex items-center gap-3 px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                              form.service === s
                                ? 'bg-brand/10 text-brand font-semibold'
                                : 'text-gray-700 hover:bg-teal-50'
                            }`}
                          >
                            {form.service === s && (
                              <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                            )}
                            <span className={form.service === s ? '' : 'ml-7'}>{s}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Date */}
                <div className="relative mb-4">
                  <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" aria-hidden="true" />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    aria-label="Preferred appointment date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors text-gray-700"
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your concern (optional)"
                  rows={3}
                  aria-label="Additional message"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors resize-none mb-5"
                />

                <button
                  type="submit"
                  className="w-full bg-brand-gradient text-white font-bold py-4 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-brand/20 text-base"
                >
                  Book via WhatsApp
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  We'll send a WhatsApp confirmation within 2 hours
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
