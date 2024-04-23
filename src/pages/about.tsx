import StyledBar from 'components/StyledBar'
import { ReactElement } from 'react'

const About = (): ReactElement => {
  return (
    <main className="w-full h-full">
      <section className="bg-black-800 h-[calc(100vh-0.5rem)]">
        olá mundo
      </section>
      <StyledBar />
    </main>
  )
}

export default About
