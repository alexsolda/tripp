import { ReactElement } from 'react'

type IStyledBarProps = {
  fixed?: boolean
}

const StyledBar = ({ fixed }: IStyledBarProps): ReactElement => {
  return (
    <div
      className={`${
        fixed && 'fixed top-0 z-[9999]'
      } w-full h-2 bg-gradient-to-r from-primary to-secondary`}
    />
  )
}

export default StyledBar
