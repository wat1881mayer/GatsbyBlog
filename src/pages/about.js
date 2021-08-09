import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import {Link,graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

export const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
const About = ({
    data:{
        allContentfulRecipe:{nodes:recipes},
    },
}) => {
    return (
        <Layout>
          <SEO title="About" content="this is about page"/>
             <main className="page">
                 <section className="about-page">
                     <article>
                         <h2>I'm baby coloring book poke taxidermy</h2>
                         <p>無敗6連勝レイパパレ
                         </p>
                         <p>
                             グランプリ3連覇クロノジェネシス
                         </p>
                         <Link to="/contact" className="btn">
                             contact
                         </Link>
                     </article>
                     <StaticImage 
                     src="../assets/images/about.jpg" 
                     alt="Person Pouring Salt in Bowl"
                     className="about-img"
                     placeholder="blurred"
                      />
                 </section>
                 <section className="featured-recipes">
                     <h5>Look at this  Awesomesouce!</h5>
                     <RecipesList recipes={recipes} />
                 </section>
             </main>
        </Layout>
    )
}


export default About
