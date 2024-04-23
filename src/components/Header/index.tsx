import { ReactElement } from 'react'
import Logo from '../Logo'
import LinkWrapper from 'components/LinkWrapper'
import { RiInformation2Fill } from 'react-icons/ri'
import StyledBar from 'components/StyledBar'

const Header = (): ReactElement => {
  return (
    <section>
      <header className="h-16 w-full bg-black-800">
        <div className="max-w-userView m-auto h-full flex items-center justify-between">
          <Logo />
          <LinkWrapper href="/about">
            <RiInformation2Fill size={30} aria-label="About" />
          </LinkWrapper>
        </div>
      </header>
      <StyledBar />
    </section>
  )
}

export default Header
