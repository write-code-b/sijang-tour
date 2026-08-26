'use client'

import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import { motion } from 'motion/react'

const ImageCardTag = ({ initialDisplayPosts = [], posts }) => {
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <motion.ul
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-normal gap-4"
      >
        {displayPosts.map((post) => {
          const { path, date, title, tags, images } = post
          return (
            <li key={path} className="w-40 py-5 sm:w-48 md:w-48">
              <article>
                <div className="relative h-40 sm:h-48 md:h-48">
                  {images && (
                    <>
                      <Image src={images} fill alt="" className="object-cover" />
                    </>
                  )}
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {tags?.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                <div className="pt-2 text-sm leading-6">
                  <dl>
                    <dt className="sr-only">발행일</dt>
                    <dd>
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <h2 className="line-clamp-2 overflow-hidden leading-4 sm:min-h-14 md:min-h-14">
                    {title}
                  </h2>
                </div>
              </article>
            </li>
          )
        })}
      </motion.ul>
    </>
  )
}

export default ImageCardTag
