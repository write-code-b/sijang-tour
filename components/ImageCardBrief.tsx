'use client'

import Link from '@/components/Link'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { motion } from 'motion/react'

const ImageCardBrief = ({ posts, count }) => {
  return (
    <>
      <motion.ul
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-5 sm:justify-normal md:justify-normal"
      >
        {!posts.length && '글이 없습니다.'}
        {posts.slice(0, count).map((post) => {
          const { slug, date, title, images } = post
          return (
            <li key={slug} className="w-xs">
              <Link href={`/blog/${slug}`}>
                <article>
                  <div className="relative h-80 bg-white">
                    {images && (
                      <>
                        <Image src={images} fill alt="" className="object-cover" />
                      </>
                    )}
                  </div>
                  <div className="pt-3 text-sm leading-6">
                    <dl>
                      <dt className="sr-only">발행일</dt>
                      <dd>
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <h2>{title}</h2>
                  </div>
                </article>
              </Link>
            </li>
          )
        })}
      </motion.ul>
    </>
  )
}

export default ImageCardBrief
