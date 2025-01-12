import React from 'react';
import { graphql } from "gatsby"
import './artworks.css';
import Artwork from '../components/artwork';
import Layout from '../components/layout'

const reflections = [
	"Origin",
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

const Reflections = ({ data }) =>  (
      <Layout pageTitle="chang hsin-yu 張欣語 reflections">
      <div className="work_main">
      <div style={{width:'100%', display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
        {reflections.map((p, index) => {
          const node = findTitle(data.allMarkdownRemark.edges, p);
				  const dest = node ? node.fields.slug : '';
					const img = node.frontmatter.featuredImage.childImageSharp.gatsbyImageData;
          return (
            <div key={p} className="work">
              <Artwork
												title={node.frontmatter.title}
												category={node.frontmatter.category}
												material={node.frontmatter.material}
												date={node.frontmatter.date}
												venue={node.frontmatter.venue}
												event={node.frontmatter.event}
												img={img}
												to={dest}
												index={index}
							/>
              {index < reflections.length - 1 ? '': ''}
            </div>
				          );
        })}
      </div>
      </div>
      </Layout>
);

export default Reflections;

export const query = graphql`{
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date
          material
          category
          event
          venue
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
