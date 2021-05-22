import React from "react"
import { graphql } from "gatsby"
import './blog-post.css';
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="work_main">
        <div className="ttlbox">
          <div className="ttl">{post.frontmatter.title}</div>
          <div className="inf">{post.frontmatter.description}<br />{post.frontmatter.date}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
    }
  }
`
