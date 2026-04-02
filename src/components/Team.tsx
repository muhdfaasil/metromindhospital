import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const team = [
  {
    name: 'Dr. Thalhath',
    role: 'Chief Psychiatrist & Medical Director',
    credentials: 'MD Psychiatry',
    image: `${import.meta.env.BASE_URL}assets/thalhath.jpeg`,
    specialty: 'Precision Psychiatry · qEEG',
  },
  {
    name: 'Dr. Ashita',
    role: 'Senior Consultant Psychiatrist',
    credentials: 'MD Psychiatry',
    image: `${import.meta.env.BASE_URL}assets/Ashita.jpeg`,
    specialty: 'Ketamine Therapy · Psychopharmacology',
  },
  {
    name: 'Arshina Muhammad',
    role: 'Chief Consultant Psychologist',
    credentials: 'M.Phil Clinical Psychology',
    image: `${import.meta.env.BASE_URL}assets/arshina.jpeg`,
    specialty: 'CBT · DBT · Trauma Therapy',
    objectPosition: '50% 40%',
  },
  {
    name: 'Pameela Ajithkumar',
    role: 'Senior Consultant Psychologist',
    credentials: 'M.Phil Clinical Psychology',
    image: `${import.meta.env.BASE_URL}assets/pameela.jpeg`,
    specialty: 'Psychotherapy · EMDR',
  },
  {
    name: 'Nitha Shaney',
    role: 'Lead Psychiatric Social Worker',
    credentials: 'MSW',
    image: `${import.meta.env.BASE_URL}assets/nitha.jpeg`,
    specialty: 'Social Rehabilitation · Community Care',
  },
]

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="team" ref={ref} className="py-24 bg-gray-50 overflow-hidden" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Expert Team
          </span>
          <h2
            id="team-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
          >
            Meet Our <span className="text-gradient">Specialists</span>
          </h2>
          <p className="text-gray-500 text-lg">
            A multidisciplinary team of psychiatrists, psychologists and social workers dedicated to your mental wellness.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)] min-w-[200px] max-w-[260px]"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[3/4] bg-teal-50">
                <img
                  src={member.image}
                  alt={`${member.name} — ${member.role} at Metro Mind Hospital`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: member.objectPosition ?? 'top' }}
                  loading="lazy"
                  width="260"
                  height="346"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-4 border-t-2 border-brand/30">
                <h3 className="font-heading font-bold text-gray-900 text-sm leading-snug">{member.name}</h3>
                <p className="text-brand-dark text-xs font-semibold mt-0.5">{member.credentials}</p>
                <p className="text-gray-500 text-xs mt-1 leading-snug">{member.role}</p>
                <p className="text-gray-400 text-xs mt-2 italic">{member.specialty}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
