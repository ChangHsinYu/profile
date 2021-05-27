import React from 'react';
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import './codearts.css';
import ReactHtmlParser from 'react-html-parser';
import codearts from './codearts/codearts.content';
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

const Codearts = ({ data }) =>  (
      <Layout>
      	<div className="work_main">
					<div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
        		{codearts.img.map((p, index) => {
          		const node = findTitle(data.allMarkdownRemark.edges, p.title);
				  		const dest = node ? node.fields.slug : '';
          		return (
            		<div className="creative" key={index}>
									<img style={{width:'100%'}} src={p} />
              		{index < codearts.img.length - 1 ? '': ''}
            		</div>
				          	);
        		})}
					</div>
      	</div>
				<div style={{width:'100%', height:'50px', float:'left'}}></div>
      </Layout>
);

export default Codearts;

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
