'use client'
import Image from 'next/image'
import { motion } from 'motion/react'

export default function Header() {
  return (
    <header className='flex flex-col items-center justify-center h-dvh w-full bg-[url(/AtronHeader.png)] bg-no-repeat bg-cover bg-bottom-right'>
      <div className='flex flex-col w-2/3 h-full items-center justify-between pb-44 pt-14 z-10 overflow-hidden'>
        <div className='flex items-ceter justify-between w-full overflow-hidden'>
          <motion.div
            initial={{ transform: 'translate(-100%)' }}
            animate={{ transform: 'translate(0)' }}
            transition={{
              duration: 1,
              transform: { type: "spring", visualDuration: 1, bounce: 0.2 }
            }}
          >
            <Image
              src="/A-tron-logo.avif"
              alt='A-TRON'
              width={200}
              height={40}
              priority
            />
          </motion.div>
          <motion.div
            className='flex items-start justify-center cursor-auto'
            initial={{ transform: 'translate(100%)' }}
            animate={{ transform: 'translate(0)' }}
            transition={{
              duration: 1,
              transform: { type: "spring", visualDuration: 1, bounce: 0.2 }
            }}
          >
            <div className='flex items-center'>
              <a
                className='
                  relative
                  mr-6
                  cursor-pointer
                  h-7 w-7
                  bg-[url(/call.svg)] bg-no-repeat bg-cover
                  before:content-["+1_234_555-55-55"]
                  before:opacity-0
                  before:absolute
                  before:right-full before:top-1/2 before:-translate-y-1/2
                  before:w-max
                  before:pr-3
                  before:font-bold before:text-xl before:text-white before:uppercase
                  before:transition-opacity duration-300 ease-in-out
                  before:pointer-events-none
                  hover:before:opacity-100
                  hover:before:pointer-events-auto
                '
                href='tel:+1_234_555-55-55'
              />
              <a
                className='
                  bg-[url(/menu.svg)] bg-no-repeat bg-cover
                  transition-bg duration-200 ease-in-out
                  hover:bg-[url(/menu-hover.svg)]
                  rotate-180 h-6 w-9
                  cursor-pointer
                '
              />
            </div>
          </motion.div>
        </div>
        <motion.h1
          className='font-bold text-8xl text-white'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: "spring", visualDuration: 1, bounce: 0.2 }
          }}
        >
          Effizienz in jedem Detail
        </motion.h1>
      </div>
    </header>
  )
};