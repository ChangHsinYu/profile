import React from 'react';
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import './artworks.css';
import ReactHtmlParser from 'react-html-parser';
import prfrmncs from './performances/performances.content';
import Artwork from '../components/artwork';
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

const Prfrmncs = ({ data }) =>  (
      <Layout>
      <div className="work_main">
        {prfrmncs.map((p, index) => {
          const node = findTitle(data.allMarkdownRemark.edges, p.title);
				  const dest = node ? node.fields.slug : '';
          return (
            <div>
              <Artwork title={p.title} index={index} category={p.category} year={p.year} img={p.img} to={dest}/>
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