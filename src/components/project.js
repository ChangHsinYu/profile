import React from 'react';
import FadeIn from '../utils/fade-in';
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
      <button onClick={this.show} className='project_img'>
          <GatsbyImage image={this.props.img} style={{width:'100%', height:'100%'}} alt='project'/>
      </button>
      {
        this.state.open
          ? (
              <div className="project_dtl" id='dtl'>
                <FadeIn
                  opacity={{
                    start: 0,
                    end: 1,
                    stiffness: 120,
                    damping: 17,
                  }}
                >
                  <div className="project_bar">
                    <button className="project_bk" onClick={this.close}>back</button>
                  </div>
                  <div className="project_dtldiv">
                    <FadeIn opacity={{
                              start: 0,
                              end: 1,
                              stiffness: 100,
                              damping: 20,}}
                    >
                      <div className="project_dtlimg">
                        <GatsbyImage image={this.props.img} style={{width:'100%', height:'100%'}} alt='project'/>
                      </div>
                    </FadeIn>
                    <FadeIn opacity={{
                              start: 0,
                              end: 1,
                              stiffness: 100,
                              damping: 20,}}
                    >
                    <div className="project_dtlinf">
                      {this.props.title}&nbsp;&nbsp;|&nbsp;&nbsp;{this.props.position}<br />
                      <br />
                      時間 : {this.props.date}<br />
                      活動 : {this.props.event}<br />
                      地點 : {this.props.location}<br />
                      <br />
                      {this.props.discription}
                    </div>
                    </FadeIn>
                  </div>
                  <div className="project_dtldiv" style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
                    {this.props.smlimg.map((p, index) => {
                  	   return (
                         <div className="project_smlimg">
                              <GatsbyImage image={p.childImageSharp.gatsbyImageData} style={{width:'100%', height:'100%'}} alt='project'/>
                         </div>
        						   );
                	  })}
                  </div>
                  <div className="project_dtldiv">&nbsp;&nbsp;</div>
                </FadeIn>
              </div>
            )
            : (
              null
            )
      }
      </div>
		);
	}
}

export default Project;
