import {graphql} from 'gatsby';

export const projectFragment = graphql`
  fragment ProjectFragment on ContentfulProjects {
    client
    description
    isPagePublic
    name
    roles
    slug
    team
    type
    websiteUrl
    year
    link: gatsbyPath(filePath: "/projects/{ContentfulProjects.slug}")
    images: childrenFile {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
  }
`;
