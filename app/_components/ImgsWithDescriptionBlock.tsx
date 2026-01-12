'use client'
import { motion } from 'motion/react'

type Props = {
  // unoptinal later⌄
  imagePaths?: [string, string],
  title: string,
  desc: string,
  left: boolean
}

export default function ImgsWithDescriptionBlock({ imagePaths, title, desc, left }: Props) {
  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      <div className="grid grid-cols-12 grid-rows-1 gap-5 h-[33vh] overflow-hidden">
        <motion.div
          className={`${left ? 'col-span-8' : 'col-span-4'} bg-gray-600 rounded-xl`}
          initial={{ transform: 'translate(-100%)' }}
          whileInView={{ transform: 'translate(0)', transition: { duration: 0.4, delay: 0.2, ease: 'easeOut' } }}
        >
          1
          {/* Later I'll put here next Image component with the imagePaths[0] */}
        </motion.div>
        <motion.div
          className={`${left ? 'col-span-4 col-start-9' : 'col-span-8 col-start-5'} bg-gray-600 rounded-xl`}
          initial={{ transform: 'translate(100%)' }}
          whileInView={{ transform: 'translate(0)', transition: { duration: 0.4, delay: 0.2, ease: 'easeOut' } }}
        >
          2
          {/* Later I'll put here next Image component with the imagePaths[1] */}
        </motion.div>
      </div>
      <div
        className="flex flex-col gap-3"
      >
        <div className="overflow-hidden">
          <motion.h3
            className="font-bold text-3xl text-white w-full text-left"
            initial={{ transform: 'translate(0, 100%)' }}
            whileInView={{ transform: 'translate(0, 0)', transition: { ease: 'easeOut' } }}
          >
            {title}
          </motion.h3>
        </div>
        <motion.p
          className="text-base leading-6 text-white text-left w-full"
          initial={{ transform: 'translate(0, 100%)' }}
          whileInView={{ transform: 'translate(0, 0)', transition: { delay: 0.2, ease: 'easeOut' } }}
        >
          {desc}
        </motion.p>
      </div>
    </div>
  )
}