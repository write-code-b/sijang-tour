import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="flex h-5 items-center justify-center rounded-lg p-0.5 text-xs font-extralight uppercase hover:bg-(--color-logo) sm:text-sm md:text-sm"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
