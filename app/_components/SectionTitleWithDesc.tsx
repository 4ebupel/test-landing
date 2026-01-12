'use client'

import { motion } from 'motion/react';

export default function SectionTitleWithDesc() {
  return (
    <motion.section
      className='flex items-center w-full'
      initial={{ transform: 'translate(0, 100%)' }}
      whileInView={{ transform: 'translate(0, 0)' }}
      transition={{
        duration: 0.2,
        delay: 0.2
      }}
    >
      <div className='flex items-start justify-between gap-6'>
        <h2
          className='font-bold text-6xl text-white min-w-max'
        >
          Mehr Sparen
        </h2>
        <p
          className='text-2xl text-white max-w-3/5'
        >
          Unsere Blockheizkraftwerke vereinen traditionelle Ingenieurskunst mit
          modernster Technologie und bieten Ihnen so die
          effizientesten und umweltfreundlichsten Lösungen.
        </p>
      </div>
    </motion.section>
  )
}