import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import './project-post.css'
import { GatsbyImage } from "gatsby-plugin-image"

export default function ProjectPost({ data }) {
  const post = data.markdownRemark
  let featuredImg = post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
  return (
    <Layout>
    <div className="work_main">
    <div className="project_main">
        <div className="main_img">
          <GatsbyImage image={featuredImg} style={{top:'-25%'}} alt='project'/>
        </div>
        <div className="ttlbox">
          <div className="ttl">
              {post.frontmatter.title}
          </div>
          <div className="inf">
              {post.frontmatter.position}<br/>
              {post.frontmatter.date}
          </div>
        </div>

        <div className="dscrptn" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
    </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
        title
        date
        position
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
    }
  }
}
`
