type PageSchemaProps = {
  path: `/${string}`
  title: string
  description: string
}

/** Keep page identity and breadcrumbs available in the server-rendered HTML. */
export function PageSchema({ path, title, description }: PageSchemaProps) {
  const siteUrl = 'https://docs.biscotti.finance'
  const url = `${siteUrl}${path}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'en',
        isPartOf: { '@id': `${siteUrl}/#website` },
        publisher: { '@id': 'https://biscotti.finance/#organization' },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Biscotti Finance Docs', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: title, item: url },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  )
}
