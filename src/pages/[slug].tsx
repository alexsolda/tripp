import { ReactElement } from 'react'
import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { GetPageBySlugQuery, PagesQuery } from 'graphql/generated/graphql'

const Pages = ({ body }: PageTemplateProps): ReactElement => {
  const router = useRouter()

  if (router.isFallback) return <></>
  return <PageTemplate body={body} />
}

export default Pages

export const getStaticPaths = async () => {
  const slugs = await client.request<PagesQuery>(GET_PAGES, { first: 3 })
  const { pages } = slugs

  const paths = pages.map(({ slug }) => ({ params: { slug } }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      body: page.body.html
    }
  }
}
