import React from 'react';
import { graphql } from "gatsby"
import './artworks.css';
import Artwork from '../components/artwork';
import Layout from '../components/layout'

const prfrmncs = [
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
      <Layout>
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
