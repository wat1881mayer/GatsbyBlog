import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({ title, description }) => {
    const {site} = useStaticQuery(query)
    const metaDesicription = description || site.siteMetadata.desciption

  return (
    <Helmet 
      htmlAttributes={{ lang: "jp" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: "description", constent: description }]}
    ></Helmet>
  )
}

export default SEO
