'use client'
import { motion } from "motion/react";
import Image from 'next/image'

interface Props {
  type: '20' | '25' | '50'
}

interface Anims {
  initialAnim: { transform: string, opacity: number },
  whileInViewAnim: { transform: string, opacity: number }
}

export default function Card({type}: Props) {
  const anims: Anims = {
    initialAnim: { transform: '', opacity: 0 },
    whileInViewAnim: { transform: '', opacity: 0 },
  };

  if (type === '20') {
    anims.initialAnim = { transform: 'translate(-100%)', opacity: 0 };
    anims.whileInViewAnim = { transform: 'translate(0)', opacity: 1 }
  } else if (type === '25') {
    anims.initialAnim = { transform: 'translate(0, 20%)', opacity: 0};
    anims.whileInViewAnim = { transform: 'translate(0, 0)', opacity: 1 };
  } else {
    anims.initialAnim = { transform: 'translate(100%)', opacity: 0 };
    anims.whileInViewAnim = { transform: 'translate(0)', opacity: 1 }
  }

  function renderSwitch(param: Props['type']) {
    switch (param) {
      case '20':
        return 'ab 41.950,00 €'
      case '25':
        return 'ab 47.100,00 €'
      case '50':
        return 'ab 79.900,00 €'
      default:
        break;
    }
  }

  return (
    <article className="flex flex-col justify-between gap-2 h-fit" >
      <motion.div
        className=""
        initial={anims.initialAnim}
        whileInView={anims.whileInViewAnim}
        whileHover={{ transform: 'translate(0, -10%)' }}
        transition={{
          duration: 0.2
        }}
      >
        <div
          className="max-w-full max-h-1/2"
        >
          <Image
            src='/BHKW.png'
            alt='BHKW'
            width={510}
            height={633}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          className='flex flex-col justify-between gap-2 h-max'
        >
          <h3 className='font-bold text-3xl text-white w-full text-left' >
            {`Helios ` + type}
          </h3>
          <p className='text-base leading-6 text-left w-full' >
            {type === '20' ? (
              'Ideal für kleine Unternehmen. Klein, aber oho!'
            ) : type === '25' ? (
             'Das universellste Modell für alle' 
            ) : (
              'Das größte Modell für alle, die alles wollen.'
            )}
          </p>
          <h3 className='font-bold text-2xl text-white w-full text-left' >
            {renderSwitch(type)}
          </h3>
        </div>
      </motion.div>
    </article>
  )
}