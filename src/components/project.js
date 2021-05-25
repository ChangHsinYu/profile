import React from 'react';
import FadeIn from '../utils/fade-in';
import Link from 'gatsby-link';
import InlineBlock from 'react-inline-block';

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
      <InlineBlock className='project'>
      <img className='project_img' src={this.props.img} style={{width:'100%'}} onClick={this.show}/>
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
                    <div className="project_bk" onClick={this.close}>back</div>
                  </div>
                  <div className="project_dtldiv">
                    <FadeIn opacity={{
                              start: 0,
                              end: 1,
                              stiffness: 100,
                              damping: 20,}}
                    >
                      <div className="project_dtlimg">
                        <img src={this.props.img} style={{width:'100%'}} />
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
                      時間 : {this.props.year}<br />
                      活動 : {this.props.event}<br />
                      地點 : {this.props.location}<br />
                      <br />
                      {this.props.others}
                    </div>
                    </FadeIn>
                  </div>
                  <div className="project_dtldiv">
                    <img className="project_smlimg" src={this.props.smlimg[0]}/> <img className="project_smlimg" src={this.props.smlimg[1]}/> <img className="project_smlimg" src={this.props.smlimg[2]}/> <img className="project_smlimg" src={this.props.smlimg[3]}/> <div className="project_smlimg"></div>
                  </div>
                </FadeIn>
              </div>
            )
            : (
              null
            )
      }
      </InlineBlock>
		);
	}
}

export default Project;
