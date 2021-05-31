import img0 from './codearts/img-0.jpg';
import img1 from './codearts/img-1.jpg';
import img2 from './codearts/img-2.jpg';
import img3 from './codearts/img-3.jpg';
import img4 from './codearts/img-4.jpg';
import img5 from './codearts/img-5.jpg';
import img6 from './codearts/img-6.jpg';

import React from 'react';
import './codearts.css';
import Layout from '../components/layout'

const codearts = [
  img6,
  img5,
  img4,
  img3,
  img2,
  img1,
  img0
];

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
