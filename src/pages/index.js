import React from "react"
import Layout from '../components/Layout'
import * as homeStyles from '../styles/home.module.css'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'


export default function Home({ data }) {
  const image = data.file.childImageSharp.fluid
  return (
    <Layout>
      <section className={homeStyles.header}>
        <div>
          <h3>Devlop & Deploy</h3>
          <p>UX designer & web developer based in Sveta Marija.</p>
          <Link className={homeStyles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        <Img fluid={image} />
      </section>
    </Layout>
  )
}


export const query = graphql`
query banner {
  file(relativePath: {eq: "banner.png"}) {
    id
    childImageSharp {
      fluid {
       ...GatsbyImageSharpFluid
      }
    }
  }
}
`