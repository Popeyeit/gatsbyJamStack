import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styles from "./boxer-template.module.css"

const BoxerTemplate = ({ data }) => {
  console.log(data)

  return (
    <section className={styles.page}>
      <Link to="/boxers/"> All boxers</Link>
      <article className={styles.article}>
        <h2>{data.boxer.title}</h2>
        <Image fluid={data.boxer.image.fluid} />
        <p>{data.boxer.description.description}</p>
      </article>
    </section>
  )
}

export const query = graphql`
  query getSingleBoxer($slug: String) {
    boxer: contentfulBoxer(slug: { eq: $slug }) {
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description {
        description
      }
    }
  }
`

export default BoxerTemplate
