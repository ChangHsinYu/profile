import React from 'react';
import { graphql } from "gatsby"
import './projects.css';
import ReactHtmlParser from 'react-html-parser';
import Project from '../components/project';
import Layout from '../components/layout'

const projects = [
	"桃園科技藝術節前夜派對",
	"reCONNECT2021",
	"高樓",
	"TFN線上爬",
	"創世紀首部曲普羅米修斯的夢境",
	"政大音樂節",
	"顫弩的吟詠",
	"入眠自習",
	"1:1",
	"貴人散步音樂節",
	"後花園-科技與音樂跨域實驗劇場",
	"闇物種",
	"異日方梭",
	"歇斯底里的房間",
	"無光風景-NTT TIFA駐館藝術家王連晟創作",
	"浮田舞影─邵族水沙連湖畔的夏夜杵歌",
	"車過枋寮-余光中音樂劇",
];

function findJsonTitle(edges, title) {
	for (let i = 0; i < edges.length; i += 1) {
		const { node } = edges[i];
		if (node.title && node.title === title) {
			return node;
		}
	}
	return 0;
}
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
						const node = findTitle(data.allMarkdownRemark.edges, p);
						const dest = node ? node.fields.slug : '';
						const img = node.frontmatter.featuredImage.childImageSharp.gatsbyImageData;
          	const jsonNode = findJsonTitle(data.allImagesJson.edges, p);
						const imgArray = jsonNode.urls;
          	return (
              <Project
									title={node.frontmatter.title}
									position={node.frontmatter.position}
									date={node.frontmatter.date}
									event={node.frontmatter.event}
									location={node.frontmatter.location}
									to={dest}
									description={ReactHtmlParser(node.frontmatter.description)}
									img={img}
									smlimg={imgArray}
									key={p}
							/>
						);
        	})}
					<div className='project'></div>
					<div className='project'></div>
				</div>
      </div>
  </Layout>
);

export default Projects;

export const query = graphql`
  query Projects{
  	allMarkdownRemark {
    	edges {
      	node {
        	frontmatter {
          	title
          	date
          	position
          	location
          	event
          	description
          	featuredImage {
            	childImageSharp {
              	gatsbyImageData(breakpoints: 10)
            	}
          	}
        	}
					fields {
            slug
          }
      	}
    	}
  	}
  	allImagesJson {
    	edges {
      	node {
        	title
        	urls {
          	childImageSharp {
            	gatsbyImageData(layout: FULL_WIDTH)
          	}
        	}
      	}
    	}
  	}
	}
`
