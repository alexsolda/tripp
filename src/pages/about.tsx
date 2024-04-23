import ContentWrapper from 'components/ContentWrapper'
import LinkWrapper from 'components/LinkWrapper'
import Logo from 'components/Logo'
import StyledBar from 'components/StyledBar'
import { ReactElement } from 'react'
import { RiCloseCircleFill, RiLinkedinBoxFill } from 'react-icons/ri'
import { BiLogoGithub } from 'react-icons/bi'

const About = (): ReactElement => {
  return (
    <main className="w-full h-full">
      <section className="bg-black-800 h-[calc(100vh-0.5rem)]">
        <ContentWrapper className="pt-4 flex justify-end">
          <LinkWrapper href="/">
            <RiCloseCircleFill size={30} />
          </LinkWrapper>
        </ContentWrapper>
        <ContentWrapper className="flex flex-col items-center mt-10 gap-8">
          <>
            <Logo size="lg" />
            <p className="text-white text-center">
              Tripp é um sistema desenvolvido com a proposta de{' '}
              <q>diário de viagens</q>, onde o usuário poderá cadastrar
              informações relevantes dos lugares visitados.
            </p>
            <p className="text-white text-center">
              Desenvolvido por: <b>Alex Solda</b>
            </p>
            <div className="flex justify-center items-center gap-4">
              <LinkWrapper href="/">
                <RiLinkedinBoxFill size={30} />
              </LinkWrapper>
              <LinkWrapper external href="https://github.com/alexsolda">
                <BiLogoGithub size={30} />
              </LinkWrapper>
            </div>
          </>
        </ContentWrapper>
      </section>
      <StyledBar />
    </main>
  )
}

export default About
