import React from 'react'
import Layout from '../../components/Layout';
import * as projectStyles from '../../styles/projects.module.css'
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image'

export default function Projects({ data }) {
    console.log('data', data)
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact
    return (
        <Layout>
            <div className={projectStyles.portfolio}>
                <h2>Projects</h2>
                <h3>Project & Websites I've created.</h3>
                <div className={projectStyles.projects}>
                    {projects.map(project => (
                        <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
                            <div>
                                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}></Img>
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Like what you see? <strong>  Contact me at {contact} </strong></p>
            </div>
        </Layout>
    )
}


export const query = graphql`
query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          stack
          title
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
  
`