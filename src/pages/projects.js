import React from 'react';
import { graphql } from "gatsby"
import './projects.css';
import ReactHtmlParser from 'react-html-parser';
import projects from './projects/projects.content';
import Project from '../components/project';
import Layout from '../components/layout'

function findTitle(edges, title) {
	for (let i = 0; i < edges.length; i += 1) {
		const { node } = edges[i];
		if (node.frontmatter.title && node.frontmatter.title === title) {
			return node;
		}
	}
	return 0;
}

const Projects = ({ data }) =>  (
  <Layout>
      <div className="work_main">
				<div style={{width:'100%', display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
        	{projects.map((p, index) => {
          	const node = findTitle(data.allMarkdownRemark.edges, p.title);
				  	const dest = node ? node.fields.slug : '';
          	return (
              <Project
									title={p.title}
									position={p.position}
									year={p.year}
									event={p.event}
									location={p.location}
									others={ReactHtmlParser(p.others)}
									img={p.img}
									smlimg={p.smlimg}
									to={dest}
									key={p.title}
							/>
						);
        	})}
				</div>
      </div>
  </Layout>
);

export default Projects;

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
