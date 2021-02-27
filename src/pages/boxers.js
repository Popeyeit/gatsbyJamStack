import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/boxers.module.css"
const Products = ({ data }) => {
  const {
    allContentfulBoxer: { nodes: boxers },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {boxers.map(boxer => {
          return (
            <article key={boxer.id}>
              <h2>{boxer.title}</h2>
              <Image fluid={boxer.image.fluid} alt={boxer.title} />
              <Link to={`/boxers/${boxer.slug}`}>More details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBoxer {
      nodes {
        id
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`

export default Products
