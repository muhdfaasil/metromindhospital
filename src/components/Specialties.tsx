import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Brain, Activity, Zap, Pill, Dna, Heart, Shield, Clock
} from 'lucide-react'

const specialties = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: 'Precision Psychiatry',
    desc: 'Individualised psychiatric care driven by objective biomarkers, brain scans, and personalised treatment protocols.',
    color: 'from-teal-400 to-teal-600',
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: 'qEEG & Brain Mapping',
    desc: 'Quantitative EEG to map your brain\'s electrical activity, revealing patterns that guide targeted treatment.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'rTMS & Neuromodulation',
    desc: 'Repetitive Transcranial Magnetic Stimulation — non-invasive brain stimulation for depression, anxiety & more.',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: <Pill className="w-7 h-7" />,
    title: 'Ketamine-Assisted Psychotherapy',
    desc: 'Supervised ketamine therapy for treatment-resistant depression, PTSD, and chronic pain conditions.',
    color: 'from-pink-400 to-pink-600',
  },
  {
    icon: <Dna className="w-7 h-7" />,
    title: 'Genetics-Informed Psychiatry',
    desc: 'Pharmacogenomics testing to identify the right medications for your unique genetic profile.',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Psychotherapy & Counselling',
    desc: 'Evidence-based therapy including CBT, DBT, EMDR and mindfulness by qualified clinical psychologists.',
    color: 'from-rose-400 to-rose-600',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'De-Addiction & Recovery',
    desc: 'Comprehensive de-addiction programs for alcohol, drugs and behavioural addictions with structured recovery planning.',
    color: 'from-amber-400 to-amber-600',
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: '24/7 Pharmacy Support',
    desc: 'Round-the-clock on-site pharmacy ensuring uninterrupted access to psychiatric medications.',
    color: 'from-cyan-400 to-cyan-600',
  },
]

export default function Specialties() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="specialties" ref={ref} className="py-24 bg-white" aria-labelledby="specialties-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-brand font-semibold text-sm uppercase tracking-widest mb-3">
            What We Treat
          </span>
          <h2
            id="specialties-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
          >
            Our <span className="text-gradient">Specialties</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Eight specialised services built around the science of the mind — from diagnostics to long-term recovery.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((sp, i) => (
            <motion.article
              key={sp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 to-teal-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${sp.color} text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {sp.icon}
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-base mb-2 leading-snug">
                  {sp.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {sp.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${sp.color} transition-all duration-500 rounded-b-2xl`} />
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#appointment"
            onClick={e => { e.preventDefault(); document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-brand/30 hover:scale-105 transition-all duration-200"
          >
            Consult a Specialist
          </a>
        </motion.div>
      </div>
    </section>
  )
}
