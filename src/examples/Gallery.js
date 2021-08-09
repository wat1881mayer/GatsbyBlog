import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage ,getImage} from 'gatsby-plugin-image'
import styled from 'styled-components'

const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
        name
      }
    }
  }
`

const Gallery = () => {
    const data = useStaticQuery(query)
    const nodes = data.allFile.nodes
    return (
        <Wrapper>
            {nodes.map((image,index)=>{
                const {name} = image 
                const pathToImage = getImage(image)
                console.log(image)
                return (
                <article key={index} >
                <GatsbyImage image={pathToImage} 
                alt={name}
                className="gallery-img"
                />
                    <p>{name}</p>
                </article>
            )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
.item {
    margin-right: 1rem;
}
`

export default Gallery
