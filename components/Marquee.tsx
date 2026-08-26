'use client'

import { motion } from 'motion/react'

const Marquee = () => {
  return (
    <>
      <div className="overflow-hidden py-3">
        <motion.div
          className="flex w-max text-sm"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 15,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <span className="mr-4 text-(--color-accent)">
            시장투어 웹진을 만들었어용 💚 시장투어 웹진을 만들었어용 💚 시장투어 웹진을 만들었어용
            💚 시장투어 웹진을 만들었어용 💚 시장투어 웹진을 만들었어용 💚
          </span>

          <span className="mr-4 text-(--color-accent)">
            시장투어 웹진을 만들었어용 💚 시장투어 웹진을 만들었어용 💚 시장투어 웹진을 만들었어용
            💚 시장투어 웹진을 만들었어용 💚 시장투어 웹진을 만들었어용 💚
          </span>
        </motion.div>
      </div>
    </>
  )
}

export default Marquee
