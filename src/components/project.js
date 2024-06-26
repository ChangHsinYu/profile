import { Link } from 'gatsby-link';
import React from 'react';
// import FadeIn from '../utils/fade-in';
import { GatsbyImage } from "gatsby-plugin-image";

class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  show = () => {
   this.setState(prevState => ({
     open: !prevState.open
   }))
  }
  close = () => {
    this.setState({
 			open: false,
 		});
  }
	render() {
		return (
      <div className='project'>
      <Link to={this.props.to}>
          <GatsbyImage image={this.props.img} style={{width:'100%', height:'100%'}} alt='project'/>
      </Link>
      </div>
      // <button onClick={this.show} className='project_img'>
      //     <GatsbyImage image={this.props.img} style={{width:'100%', height:'100%'}} alt='project'/>
      // </button>
      // {
      //   this.state.open
      //     ? (
      //         <div className="project_dtl" id='dtl'>
      //           <FadeIn
      //             opacity={{
      //               start: 0,
      //               end: 1,
      //               stiffness: 120,
      //               damping: 17,
      //             }}
      //           >
      //             <div className="project_bar">
      //               <button className="project_bk" onClick={this.close}>back</button>
      //             </div>
      //
      //             <div className="project_dtldiv">
      //               <div className="project_dtlimg">
      //                 <GatsbyImage image={this.props.img} style={{width:'100%', height:'100%'}} alt='project'/>
      //               </div>
      //               <div className="project_dtlinf">
      //                 {this.props.title}&nbsp;&nbsp;|&nbsp;&nbsp;{this.props.position}<br />
      //                 <br />
      //                 時間 : {this.props.date}<br />
      //                 活動 : {this.props.event}<br />
      //                 地點 : {this.props.location}<br />
      //                 <br />
      //                 {this.props.description}
      //                 <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
      //                   {this.props.smlimg.map((p, index) => {
      //               	     return (
      //                        <div className="project_smlimg">
      //                           <GatsbyImage image={p.childImageSharp.gatsbyImageData} style={{width:'100%', height:'100%'}} alt='project'/>
      //                        </div>
      //     						     );
      //             	    })}
      //                 </div>
      //                 &nbsp;&nbsp;
      //               </div>
      //             </div>
      //
      //           </FadeIn>
      //         </div>
      //       )
      //       : (
      //         null
      //       )
      // }
      // </div>
		);
	}
}

export default Project;
