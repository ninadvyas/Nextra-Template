import { useRouter } from 'next/router';
import React from 'react';

const Head = ({ meta }: { meta: { title: string; description: string; image: string } }) => {
  // Site info
  const Site = `Ninad Vyas`

  // Get router
  const router = useRouter()
  const canonicalUrl = (
    `https://blog.aozaki.cc` + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]

  // Get Current Title
  const currentTitle = meta.title === `About` ? Site : `${meta.title} - ${Site}`

  return (
    <>
      {/* SEO : Traditional */}
      <meta name="robots" content="noodp" />
      <title>{currentTitle}</title>
      <meta name="title" content={currentTitle} />
      <meta name="author" content="Aozaki" />
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonicalUrl} />

    </>
  )
}

export default Head