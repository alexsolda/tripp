import ContentWrapper from 'components/ContentWrapper'
import StyledBar from 'components/StyledBar'
import { ReactElement } from 'react'
import { dateInFull } from 'utils/dateFormatters'

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
    }
    cover: ImageProps
    gallery: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlacesTemplateProps): ReactElement => {
  return (
    <section className='min-h-screen max-h-screen flex flex-col'>
      <div
      style={{backgroundImage: `url(${place.cover.url})`}}
      className='flex flex-col justify-end h-48 bg-red-500 bg-center bg-no-repeat opacity-80'>
        <div className='bg-gradient-to-t from-black-800 h-10' />
      </div>
      <article>
      <ContentWrapper>
        <div className='mt-10 flex flex-col'>
        <p className='text-secondary text-2xl font-bold'>{place.name}</p>
        <p className='text-secondary'>{dateInFull(place.arrivalDate)}</p>
        <div className='grow overflow-y-auto'>
        <div className='text-white text-justify mt-10' dangerouslySetInnerHTML={{__html: place.description.html}}/>
        </div>
        </div>
      </ContentWrapper>
      </article>
      <StyledBar />
    </section>
  )
}

export default PlacesTemplate
