import { ReactElement } from 'react'

type ContentWrapperProps = {
  children: ReactElement
  className?: string
}

const ContentWrapper = ({
  className,
  children
}: ContentWrapperProps): ReactElement => {
  return (
    <div className={`max-w-userView m-auto px-4 xl:px-0 ${className}`}>
      {children}
    </div>
  )
}

export default ContentWrapper
