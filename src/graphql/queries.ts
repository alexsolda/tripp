import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query GetPages($first: Int) {
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
  query getPlaces($first: Int) {
    places(first: $first) {
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
      cover {
        url
      }
      gallery {
        id
        url
      }
    }
  }
`

export const GET_PLACE_BY_SLUG = gql`
  query getPlaceBySlug($slug: String) {
    place(where: { slug: $slug }) {
      id
      name
      description {
        html
        text
      }
      slug
      arrivalDate
      location {
        latitude
        longitude
      }
      cover {
        url
      }
      gallery {
        id
        url
      }
    }
  }
`
