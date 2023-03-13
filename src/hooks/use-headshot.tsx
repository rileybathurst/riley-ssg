import { graphql, useStaticQuery } from "gatsby"

export const useHeadshot = () => {
  const { strapiImageGrab } = useStaticQuery(graphql`
    query {
      strapiImageGrab {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          alternativeText
        }
      }
    }
  `)

  return strapiImageGrab
}