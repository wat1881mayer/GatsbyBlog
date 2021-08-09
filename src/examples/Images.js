import React from 'react'
import styled  from 'styled-components'
import {StaticImage} from 'gatsby-plugin-image'

const Images = () => {
    return (
        <Wrapper>
            <article>
                <h4>constarained/default</h4>
                <StaticImage 
                src="../assets/images/recipe-1.jpg"
                alt="food" 
                placeholder="tracedSVG"
                layout="constrained"
                width={400}
                className="example-img"
                as="section"
                />
            </article>
            <article>
                <h4>Fixed</h4>
                <StaticImage 
                src="../assets/images/recipe-1.jpg"
                alt="food" 
                placeholder="blurred"
                layout="fixed"
                width={400}
                className="example-img"
                as="div"
                />
            </article>
            <article>
                <h4>FullWidth</h4>
                <StaticImage 
                src="../assets/images/recipe-1.jpg"
                alt="food" 
                placeholder="dominantColor"
                layout="fullWidth"
                width={400}
                className="example-img"
                as="article"
                />
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 70vw;
    margin: 0 auto;
    display: grid;
    text-align: center;
    gap: 2rem;
    article {
        border: 2px solid red;
    }
    .example-img {
        border-radius: 1rem;
        height: 300px;
    }
    @media(min-width:992px){
        grid-template-columns: 1fr 1fr 1fr;
        .example-img {
            height: 200px;
        }
    }
`

export default Images
