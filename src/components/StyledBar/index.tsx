import { ReactElement } from 'react'

const StyledBar = (): ReactElement => {
  return (
    <div className="fixed top-0 z-[9999] w-full h-2 bg-gradient-to-r from-primary to-secondary" />
  )
}

export default StyledBar
