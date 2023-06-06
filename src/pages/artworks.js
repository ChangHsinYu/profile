import React from 'react';
import { graphql } from "gatsby"
import './artworks.css';
import Artwork from '../components/artwork';
import Layout from '../components/layout'

const artworks = [
	"Vibration of Ink Fluid",
	"Tree Noise",
	"Portal",
	"Listen to the Light",
	"Soul",
	"&#x611b (online version)",
	"Cross",
	"&#x611b",
	"Cyberfly",
	"Feeding",
	"Couldn't Find",
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

const Artworks = ({ data }) =>  (
      <Layout>
      <div className="work_main">
        {artworks.map((p, index) => {
          const node = findTitle(data.allMarkdownRemark.edges, p);
				  const dest = node ? node.fields.slug : '';
					const img = node.frontmatter.featuredImage.childImageSharp.gatsbyImageData;
          return (
            <div key={p}>
              <Artwork
												title={node.frontmatter.title}
												category={node.frontmatter.category}
												date={node.frontmatter.date}
												event={node.frontmatter.event}
												img={img}
												to={dest}
												index={index}
							/>
              {index < artworks.length - 1 ? '': ''}
            </div>
				          );
        })}
      </div>
      </Layout>
);

export default Artworks;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
						title
		        date
		        category
						event
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
  }
`
