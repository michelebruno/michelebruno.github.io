import {graphql} from "gatsby";

export const projectFragment = graphql`fragment ProjectFragment on ContentfulProjects {
    slug
    roles
    name
    year
    team
    websiteUrl
    description
    link: gatsbyPath(filePath: "/projects/{ContentfulProjects.slug}")
    images: childrenFile {
        childImageSharp {
            gatsbyImageData(
                quality: 100
            )
        }
    }
    
}`