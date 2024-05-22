import { Tooltip } from '@nextui-org/react'
import { ReactElement } from 'react'

type ITooltipContainerProps = {
  text: string
  children: ReactElement
}

const TooltipContainer = ({
  text,
  children
}: ITooltipContainerProps): ReactElement => {
  return (
    <Tooltip content={text} className="bg-black-800 text-white">
      {children}
    </Tooltip>
  )
}

export default TooltipContainer
