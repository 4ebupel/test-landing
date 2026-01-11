'use client'

import { motion } from "motion/react"

export default function Button() {
  return (
    <div className="flex w-full h-12">
      <motion.button
        className="
          bg-[#ca453c] 
          w-full rounded-2xl h-full 
          transition-all duration-200 ease-in-out 
          hover:scale-110 hover:shadow-[1px_4px_16px_0_#ca453c]
          text-xl
          font-bold
          cursor-pointer
        "
        initial={{ transform: 'translate(0, 100%)' }}
        whileInView={{ transform: 'translate(0, 0)' }}
      >
        die beste Passform finden
      </motion.button>
    </div>
  )
}