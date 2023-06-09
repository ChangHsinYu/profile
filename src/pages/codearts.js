import img0 from './codearts/img-0.jpg';
import img1 from './codearts/img-1.jpg';
import img2 from './codearts/img-2.jpg';
import img3 from './codearts/img-3.jpg';
import img4 from './codearts/img-4.jpg';
import img5 from './codearts/img-5.jpg';
import img6 from './codearts/img-6.jpg';
import img7 from './codearts/img-7.jpg';
import img8 from './codearts/img-8.jpg';
import img9 from './codearts/img-9.jpg';
import img10 from './codearts/img-10.jpg';
import img11 from './codearts/img-11.jpg';
import img12 from './codearts/img-12.jpg';
import img13 from './codearts/img-13.jpg';
import img14 from './codearts/img-14.jpg';
import img15 from './codearts/img-15.jpg';
import img16 from './codearts/img-16.jpg';
import img17 from './codearts/img-17.jpg';

import React from 'react';
import './codearts.css';
import Layout from '../components/layout'

const codearts = [
  img17,
  img16,
  img15,
  img14,
  img13,
  img12,
  img11,
  img10,
  img9,
  img8,
  img7,
  img6,
  img5,
  img4,
  img3,
  img2,
  img1,
  img0
];

const Codearts = ({ data }) =>  (
      <Layout pageTitle="chang hsin-yu 張欣語 codearts">
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
