import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import './blog-post.css'
import { GatsbyImage } from "gatsby-plugin-image"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  let featuredImg = post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
  return (
    <Layout>
    <div className="work_main">
        <GatsbyImage image={featuredImg} layout="fullWidth" style={{width:'100%'}}/>

        <div class="ttlbox">
          <div class="ttl">
              {post.frontmatter.title}
          </div>
          <div class="inf">
              {post.frontmatter.category}<br />
              {post.frontmatter.date}
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
    </Layout>
  )
}

export const query = graphql`
query PostQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
        title
        date
        category
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
    }
  }
}
`
