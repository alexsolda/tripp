import { ReactElement } from 'react'
import Logo from '../Logo'
import LinkWrapper from 'components/LinkWrapper'
import { RiInformation2Fill } from 'react-icons/ri'
import StyledBar from 'components/StyledBar'
import ContentWrapper from 'components/ContentWrapper'
import dynamic from 'next/dynamic'

const DropdownView = dynamic(() => import('components/Dropdown/DropdownView'), {
  ssr: false
})

const Header = (): ReactElement => {
  return (
    <section>
      <header className="py-4 w-full bg-black-800">
        <ContentWrapper className="flex items-center justify-between">
          <>
            <Logo size="sm" />
            <div className="flex items-center gap-4">
              <DropdownView />
              <LinkWrapper href="/about">
                <RiInformation2Fill size={30} aria-label="About" />
              </LinkWrapper>
            </div>
          </>
        </ContentWrapper>
      </header>
      <StyledBar />
    </section>
  )
}

export default Header
