import React from 'react';
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
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
        {projects.map((p, index) => {
          const node = findTitle(data.allMarkdownRemark.edges, p.title);
				  const dest = node ? node.fields.slug : '';
          return (
            <div>
              <Project
									title={p.title}
									position={p.position}
									index={index}
									year={p.year}
									event={p.event}
									location={p.location}
									artist={p.artist}
									others={ReactHtmlParser(p.others)}
									img={p.img}
									smlimg={p.smlimg}
									to={dest}
							/>
              {index < projects.length - 1 ? '': ''}
            </div>
					);
        })}
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
