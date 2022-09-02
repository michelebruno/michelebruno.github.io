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
        gatsbyImageData(quality: 80, width: 2400)
      }
    }
    thumbnail {
      childImageSharp {
        gatsbyImageData(quality: 80, width: 1920)
      }
    }
  }
`;
