import Link from 'next/link'
import { ReactElement } from 'react'

type IconContainerProps = {
  href: string
  external?: boolean
  children: ReactElement
}

const LinkWrapper = ({
  href,
  external,
  children
}: IconContainerProps): ReactElement => {
  return (
    <div className="text-white cursor-pointer hover:text-secondary">
      {!external ? (
        <Link href={href}>{children}</Link>
      ) : (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      )}
    </div>
  )
}

export default LinkWrapper
