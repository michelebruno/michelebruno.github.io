import {graphql} from 'gatsby';

export const projectFragment = graphql`
  fragment ProjectFragment on ProjectsCsv {
    client
    tagline
    description
    isPagePublic
    name
    roles
    slug
    team
    type
    websiteUrl
    year
    cover {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    thumbnail {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    link: gatsbyPath(filePath: "/projects/{ProjectsCsv.slug}")
  }
`;
