import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ClipboardList, Microscope, Target, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: <ClipboardList className="w-8 h-8" />,
    step: '01',
    title: 'Intake & Assessment',
    desc: 'Comprehensive initial evaluation covering psychiatric history, lifestyle, and primary concerns with our expert clinicians.',
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    step: '02',
    title: 'Advanced Diagnostics',
    desc: 'qEEG brain mapping, genetic testing, and thorough neuropsychiatric assessments to build your biological profile.',
  },
  {
    icon: <Target className="w-8 h-8" />,
    step: '03',
    title: 'Personalised Treatment',
    desc: 'A tailored plan combining the right medications, therapy modalities, and neuromodulation based on your unique data.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    step: '04',
    title: 'Recovery Monitoring',
    desc: 'Ongoing progress tracking with measurable outcomes, regular reviews, and adjustments to keep your recovery on track.',
  },
]

export default function PatientJourney() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="journey"
      ref={ref}
      className="py-24 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 overflow-hidden"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-brand-light font-semibold text-sm uppercase tracking-widest mb-3">
            How It Works
          </span>
          <h2
            id="journey-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Your <span className="text-gradient">Patient Journey</span>
          </h2>
          <p className="text-white/60 text-lg">
            A structured four-phase pathway designed to take you from uncertainty to clarity and recovery.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-px bg-brand/30" aria-hidden="true">
            <motion.div
              className="h-full bg-brand-gradient"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              >
                {/* Icon circle */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-gradient text-white shadow-2xl shadow-brand/30 mb-6 mx-auto">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-brand-dark text-xs font-bold flex items-center justify-center shadow-md">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-white text-lg mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <a
            href="#appointment"
            onClick={e => { e.preventDefault(); document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 bg-brand-gradient text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-brand/40 hover:scale-105 transition-all duration-200"
          >
            Begin Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
