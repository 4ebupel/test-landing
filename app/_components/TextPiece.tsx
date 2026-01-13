'use client'
import RotatingText from "./_ReactBitsRotatingText";
import { LayoutGroup, motion } from 'motion/react'

export default function TextPiece() {
  return (
    <LayoutGroup>

      <motion.section
        className="flex gap-4 w-full justify-center items-center"
        layout
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      >
        {/* <Carousel fullWidth/> */}
        <motion.h2
          className=" text-white text-xl font-bold"
          layout
        >
          BHKWS Sind
        </motion.h2>
        <RotatingText
          texts={['Umweltfreundlich', 'Zukunftssicher', 'Effizient', 'Cool!']}

          mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"

          staggerFrom={"last"}

          initial={{ y: "100%" }}

          animate={{ y: 0 }}

          exit={{ y: "-120%" }}

          staggerDuration={0.025}

          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"

          transition={{ type: "spring", damping: 30, stiffness: 400 }}

          rotationInterval={2000}
        />
      </motion.section>
    </LayoutGroup>
  )
}