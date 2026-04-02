import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const pillars = [
  'Neuroscience-based diagnostics over assumptions',
  'qEEG brain mapping for objective measurement',
  'Personalised treatment for every patient',
  'Combining genetics, psychology & pharmacology',
  'Compassionate care in a serene environment',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 bg-gray-50 overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Images grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/building1.jpeg`}
                    alt="Metro Mind Hospital exterior — modern facility in Kochi"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="300"
                    height="375"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/pharmacy.jpeg`}
                    alt="Metro Mind Hospital 24/7 pharmacy and reception area"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="280"
                    height="280"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/building2.jpeg`}
                    alt="Metro Mind Hospital entrance, South Kalamassery Kochi"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="280"
                    height="280"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/building3.jpeg`}
                    alt="Metro Mind Neuropsychiatry Hospital building"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="300"
                    height="375"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-teal-100"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="text-2xl font-extrabold text-brand-dark font-heading">4.9★</div>
              <div className="text-xs text-gray-500 font-medium">Patient Satisfaction</div>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-block text-brand font-semibold text-sm uppercase tracking-widest mb-3">
              About Metro Mind
            </span>
            <h2
              id="about-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              Precision Psychiatry<br />
              <span className="text-gradient">Rooted in Science</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Metro Mind Neuropsychiatry Hospital and De-Addiction Centre is Kerala's leading facility
              for measurement-based mental healthcare. Located in South Kalamassery, Kochi, we combine
              cutting-edge neuroscience with personalised clinical care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our multidisciplinary team of psychiatrists, psychologists, and social workers work
              together to craft treatment plans that are as unique as your brain. We use qEEG brain
              mapping, genetic testing, and evidence-based therapies — not guesswork.
            </p>

            <ul className="space-y-3 mb-10" role="list">
              {pillars.map((pillar, i) => (
                <motion.li
                  key={pillar}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-brand mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-gray-700 text-sm">{pillar}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#appointment"
              onClick={e => { e.preventDefault(); document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 bg-brand-gradient text-white font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-brand/30 hover:scale-105 transition-all duration-200"
            >
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
