import Link from 'next/link'
import { ReactElement } from 'react'

type IconContainerProps = {
  href: string
  children: ReactElement
}

const LinkWrapper = ({ href, children }: IconContainerProps): ReactElement => {
  return (
    <div className="text-white cursor-pointer hover:text-secondary">
      <Link href={href}>{children}</Link>
    </div>
  )
}

export default LinkWrapper
