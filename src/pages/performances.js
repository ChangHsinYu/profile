import React from 'react';
import { graphql } from "gatsby"
import './artworks.css';
import Artwork from '../components/artwork';
import Layout from '../components/layout'

const prfrmncs = [
	"Dive in Architecture",
	"Space Surfing",
	"Counter",
	"Zebra's Dream",
	"Pronunciation Exercise",
	"Memory Noise",
	"Sketch of Audio Visual",
];

function findTitle(edges, title) {
	for (let i = 0; i < edges.length; i += 1) {
		const { node } = edges[i];
		if (node.frontmatter.title && node.frontmatter.title === title) {
			return node;
		}
	}
	return 0;
}

const Prfrmncs = ({ data }) =>  (
      <Layout pageTitle="chang hsin-yu 張欣語 performance">
      <div className="work_main">
        {prfrmncs.map((p, index) => {
          const node = findTitle(data.allMarkdownRemark.edges, p);
				  const dest = node ? node.fields.slug : '';
					const img = node.frontmatter.featuredImage.childImageSharp.gatsbyImageData;
          return (
            <div key={p}>
              <Artwork
												title={node.frontmatter.title}
												category={node.frontmatter.category}
												date={node.frontmatter.date}
												img={img}
												to={dest}
												index={index}
							/>
              {index < prfrmncs.length - 1 ? '': ''}
            </div>
				          );
        })}
      </div>
      </Layout>
);

export default Prfrmncs;

export const query = graphql`{
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date
          category
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}`
