import { usePathname } from 'next/navigation'
import Link from '@/components/Link'
import tagData from 'app/tag-data.json'
import { slug } from 'github-slugger'

const TagWrapper = () => {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <>
      <div className="hidden h-full max-h-screen flex-wrap rounded-sm sm:flex">
        {/* {pathname.startsWith('/blog') ? (
          <h3 className="text-primary-500 font-bold uppercase">All Posts</h3>
        ) : (
          <Link
            href={`/blog`}
            className="hover:text-primary-500 dark:hover:text-primary-500 font-bold text-gray-700 uppercase dark:text-gray-300"
          >
            글
          </Link>
        )} */}
        <ul className="flex flex-wrap gap-1">
          {sortedTags.map((t) => {
            return (
              <li key={t} className="rounded-lg border-2 border-dotted border-black hover:bg-white">
                {decodeURI(pathname.split('/tags/')[1]) === slug(t) ? (
                  <h3 className="inline px-3 py-2 text-sm font-bold uppercase">
                    {`${t} (${tagCounts[t]})`}
                  </h3>
                ) : (
                  <Link
                    href={`/tags/${slug(t)}`}
                    className="px-3 py-2 text-sm font-medium"
                    aria-label={`View posts tagged ${t}`}
                  >
                    {`${t} (${tagCounts[t]})`}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default TagWrapper
