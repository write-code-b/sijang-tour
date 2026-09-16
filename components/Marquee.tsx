'use client'

import { motion } from 'motion/react'

const Marquee = () => {
  return (
    <>
      <div className="mt-1 overflow-hidden bg-black font-bold">
        <motion.div
          className="flex w-max text-sm"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 15,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <span className="mr-4 text-(--color-background)">
            먹고사는 이야기로 가득한 웹진을 만들어 보려고 합니다. 먹고사는 이야기로 가득한 웹진을
            만들어 보려고 합니다. 먹고사는 이야기로 가득한 웹진을 만들어 보려고 합니다.
          </span>

          <span className="mr-4 text-(--color-background)">
            먹고사는 이야기로 가득한 웹진을 만들어 보려고 합니다. 먹고사는 이야기로 가득한 웹진을
            만들어 보려고 합니다. 먹고사는 이야기로 가득한 웹진을 만들어 보려고 합니다.
          </span>
        </motion.div>
      </div>
    </>
  )
}

export default Marquee
