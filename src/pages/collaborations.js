import React from 'react';
import { graphql } from "gatsby"
import './artworks.css';
import Artwork from '../components/artwork';
import Layout from '../components/layout'

const clbrtns = [
  "大象體操-名字",
  "聲鏡 x 404 N.F",
  "聲響藝術節 x 大象體操",
	"桃園科技藝術節 x DJ RayRay",
	"TFN線上爬",
  "創世紀首部曲普羅米修斯的夢境",
	"政大音樂節 x Hue",
  "闇物種",
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

const Clbrtns = ({ data }) =>  (
      <Layout pageTitle="chang hsin-yu 張欣語 collaborations">
      <div className="work_main">
      <div style={{width:'100%', display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
        {clbrtns.map((p, index) => {
          const node = findTitle(data.allMarkdownRemark.edges, p);
				  const dest = node ? node.fields.slug : '';
					const img = node.frontmatter.featuredImage.childImageSharp.gatsbyImageData;
          return (
            <div key={p} className="work">
              <Artwork
												title={node.frontmatter.title}
												category={node.frontmatter.category}
												date={node.frontmatter.date}
                        venue={node.frontmatter.venue}
                        event={node.frontmatter.event}
												img={img}
												to={dest}
												index={index}
							/>
              {index < clbrtns.length - 1 ? '': ''}
            </div>
				          );
        })}
      </div>
      </div>
      </Layout>
);

export default Clbrtns;

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
