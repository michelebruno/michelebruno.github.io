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
  fragment SanityProjectFragment on SanityProject {
    client
    tagline
    description
    isPagePublic
    title
    roles
    slug {
      current
    }
    type
    websiteUrl
    year
    coverImage {
      asset {
        gatsbyImageData(width: 2400)
      }
    }
    thumbnail {
      asset {
        gatsbyImageData(width: 1920)
      }
    }
    images {
      asset {
        filename
        originalFilename
        gatsbyImageData(width: 1920)
      }
    }
  }
`;
