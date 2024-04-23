import { ReactElement } from 'react'
import Logo from '../Logo'
import LinkWrapper from 'components/LinkWrapper'
import { RiInformation2Fill } from 'react-icons/ri'
import StyledBar from 'components/StyledBar'
import ContentWrapper from 'components/ContentWrapper'

const Header = (): ReactElement => {
  return (
    <section>
      <header className="py-4 w-full bg-black-800">
        <ContentWrapper className="flex items-center justify-between">
          <>
            <Logo size="sm" />
            <LinkWrapper href="/about">
              <RiInformation2Fill size={30} aria-label="About" />
            </LinkWrapper>
          </>
        </ContentWrapper>
      </header>
      <StyledBar />
    </section>
  )
}

export default Header
