import { ReactElement } from 'react'
import Logo from '../Logo'

const Header = (): ReactElement => {
  return (
    <section>
      <header className="h-16 w-full bg-black-800">
        <div className="w-userView m-auto h-full flex items-center">
          <Logo />
        </div>
      </header>
      <div className="w-full h-2 bg-gradient-to-r from-primary to-secondary" />
    </section>
  )
}

export default Header
