'use client'
import { motion } from 'motion/react'

type Props = {
  text: string
}

export default function Title({ text }: Props) {
  return (
    <div className="flex overflow-hidden w-full h-max">
      <motion.h2
        className="font-bold text-6xl text-white w-full text-center"
        initial={{ transform: 'translate(0, 100%)' }}
        whileInView={{ transform: 'translate(0, 0)', transition: { ease: 'easeOut' } }}
      >
        {text}
      </motion.h2>
    </div>
  )
}