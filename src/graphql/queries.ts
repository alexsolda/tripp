import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query Pages($first: Int) {
    pages(first: $first) {
      about
      id
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      about
      slug
      body {
        html
      }
    }
  }
`

export const GET_PLACES = gql`
  query getPlaces {
    places {
      id
      name
      description {
        html
      }
      slug
      arrivalDate
      location {
        latitude
        longitude
      }
      gallery {
        id
        url
      }
    }
  }
`
