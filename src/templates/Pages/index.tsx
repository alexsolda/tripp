import ContentWrapper from 'components/ContentWrapper'
import LinkWrapper from 'components/LinkWrapper'
import Logo from 'components/Logo'
import StyledBar from 'components/StyledBar'
import { NextSeo } from 'next-seo'
import { ReactElement } from 'react'
import { BiLogoGithub } from 'react-icons/bi'
import { RiCloseCircleFill, RiLinkedinBoxFill } from 'react-icons/ri'

export type PageTemplateProps = {
  body: string
}

const PageTemplate = ({ body }: PageTemplateProps): ReactElement => {
  return (
    <>
      <NextSeo
        title="Tripp - Sobre"
        canonical=""
        openGraph={{
          url: '',
          title: `Tripp - Sobre`
        }}
      />
      <main className="w-full h-full">
        <section className="bg-black-800 h-[calc(100vh-0.5rem)]">
          <ContentWrapper className="pt-4 flex justify-end">
            <LinkWrapper href="/">
              <RiCloseCircleFill size={30} />
            </LinkWrapper>
          </ContentWrapper>
          <ContentWrapper className="flex flex-col items-center mt-10 gap-8 md:w-readView">
            <>
              <Logo size="lg" />
              <div
                className="text-white text-center"
                dangerouslySetInnerHTML={{ __html: body }}
              />
              <div className="flex justify-center items-center gap-4">
                <LinkWrapper
                  external
                  href="https://www.linkedin.com/in/alexsolda/"
                >
                  <RiLinkedinBoxFill size={30} />
                </LinkWrapper>
                <LinkWrapper external href="https://github.com/alexsolda">
                  <BiLogoGithub size={30} />
                </LinkWrapper>
              </div>
            </>
          </ContentWrapper>
        </section>
        <StyledBar fixed />
      </main>
    </>
  )
}

export default PageTemplate
