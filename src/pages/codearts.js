import React from 'react';
import { graphql } from "gatsby"
import './codearts.css';
import codearts from './codearts/codearts.content';
import Layout from '../components/layout'

const Codearts = ({ data }) =>  (
      <Layout>
      	<div className="work_main">
					<div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
        		{codearts.map((p, index) => {
          		return (
            		<div className="creative" key={index}>
									<img style={{width:'100%'}} src={p} alt="generative"/>
              		{index < codearts.length - 1 ? '': ''}
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
