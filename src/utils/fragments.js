import {graphql} from "gatsby";

export const projectFragment = graphql`fragment ProjectFragment on ContentfulProjects {
    slug
    roles
    name
    year
    team
    websiteUrl
    images: childrenFile {
        childImageSharp {
            gatsbyImageData(
                quality: 100
            )
        }
    }
    
}`