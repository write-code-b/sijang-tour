import Link from '@/components/Link'
// import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image'
import ImageCardBrief from '@/components/ImageCardBrief'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="py-5">
            <Image
              src="/static/images/background/market.png"
              width="985"
              height="670"
              alt="횡성오일장"
              className="w-full"
            />
          </div>
        </div>
        {/* <h1 className="mb-2 text-xl leading-9 tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14"></h1> */}
        <ImageCardBrief posts={posts} count={MAX_DISPLAY} />
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-sm leading-6 font-medium">
          <Link
            href="/blog"
            className="text-(--color-accent) hover:-translate-x-0.5 dark:hover:text-(--color-accent)"
            aria-label="모든 글 보기"
          >
            전체 글 보기 &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
