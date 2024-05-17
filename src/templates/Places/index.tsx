import ContentWrapper from 'components/ContentWrapper'
import LinkWrapper from 'components/LinkWrapper'
import StyledBar from 'components/StyledBar'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import { dateInFull } from 'utils/dateFormatters'
import { NextSeo } from 'next-seo'

type ImageProps = {
  url: string
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    arrivalDate: string
    description: {
      html: string
      text: string
    }
    cover: ImageProps
    gallery: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlacesTemplateProps): ReactElement => {
  const router = useRouter()

  if (router.isFallback) return <>ué</>

  return (
    <>
      <NextSeo
        title={`${place.name} - Tripp`}
        description={`${place.description.text}`}
        canonical=""
        openGraph={{
          url: '',
          title: `${place.name} - Tripp`,
          description: `${place.description.text}`,
          images: [
            {
              url: place.cover.url,
              alt: place.name
            }
          ]
        }}
      />
      <section className="min-h-screen flex flex-col">
        <StyledBar fixed />
        <div
          style={{ backgroundImage: `url(${place.cover.url})` }}
          className="flex flex-col justify-end h-80 bg-center bg-no-repeat opacity-80"
        >
          <div className="bg-gradient-to-t from-black-800 h-10" />
        </div>
        <article>
          <ContentWrapper>
            <div className="mt-10 flex flex-col">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-secondary text-2xl font-bold">
                    {place.name}
                  </p>
                  <p className="text-secondary">
                    {dateInFull(place.arrivalDate)}
                  </p>
                </div>
                <LinkWrapper href="/">
                  <RiCloseCircleFill size={30} />
                </LinkWrapper>
              </div>
              <div className="grow overflow-y-auto">
                <div
                  className="text-white text-justify my-10"
                  dangerouslySetInnerHTML={{ __html: place.description.html }}
                />
              </div>
            </div>
          </ContentWrapper>
        </article>
      </section>
    </>
  )
}

export default PlacesTemplate
