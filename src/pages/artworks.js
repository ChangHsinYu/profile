import React from 'react';
import { graphql } from "gatsby"
import './artworks.css';
import Artwork from '../components/artwork';
import Layout from '../components/layout'

const artworks = [
	"Listen to the Light - routine",
	"Myst",
	"Soul - Vinyl",
	"Tree Noise",
	"Portal",
	"Listen to the Light",
	"Soul",
	"Cross",
	"&#x611b",
	"Cyberfly",
	"Feeding",
	"Couldn't Find",
	"Chaotic City",
	"Dive in Architecture",
	"Space Surfing",
	"Vibration of Ink Fluid",
	"Counter",
	"Zebra's Dream",
	"&#x611b (online version)",
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

const Artworks = ({ data }) =>  (
      <Layout pageTitle="chang hsin-yu 張欣語 works">
      <div className="work_main">
      <div style={{width:'100%', display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
        {artworks.map((p, index) => {
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
              {index < artworks.length - 1 ? '': ''}
            </div>
				          );
        })}
      </div>
      </div>
      </Layout>
);

export default Artworks;

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
