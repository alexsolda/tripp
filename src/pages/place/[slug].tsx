import { ReactElement } from 'react'
import client from 'graphql/client'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql'
import PlacesTemplate, { PlacesTemplateProps } from 'templates/Places'

const Place = ({ place }: PlacesTemplateProps): ReactElement => {
  const router = useRouter()

  if (router.isFallback) return <></>
  return <PlacesTemplate place={place} />
}

export default Place

export const getStaticPaths = async () => {
  const slugs = await client.request<GetPlacesQuery>(GET_PLACES, { first: 3 })
  const { places } = slugs

  const paths = places.map(({ slug }) => ({ params: { slug } }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    props: {
      place
    }
  }
}
