'use client'

import { motion } from "motion/react"

type Props = {
  text: string;
}

export default function Button({ text }: Props) {
  return (
    <motion.div
      className="flex w-full h-12 rounded-2xl"
      whileHover={{
        scale: 1.1,
        boxShadow: '1px 4px 16px 0 #ca453c',
        transition: { duration: 0.2, delay: 0.1, type: 'tween', ease: 'easeOut' }
      }}
    >
      <motion.button
        className="
          bg-[#ca453c] 
          w-full rounded-2xl h-full 
          text-white
          text-xl
          font-bold
          cursor-pointer
        "
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
      >
        {text}
      </motion.button>
    </motion.div>
  )
}