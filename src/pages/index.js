import * as React from "react"
import Layout from '../components/layout'
import P5 from '../components/p5'
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default function Home({ data }) {
  return (
    <Layout>
      <div style={{textAlign:'center'}}>
        <P5 />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
