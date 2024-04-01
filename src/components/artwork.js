import React from 'react';
import { Link }from 'gatsby-link';
import { GatsbyImage } from "gatsby-plugin-image";

class Artwork extends React.Component {
	render() {
		return (
        <div>

          <Link to={this.props.to}>
					<div className="work_img">
							<GatsbyImage image={this.props.img} style={{width:'100%', height:'100%'}} alt='artwork'/>
					</div>
					</Link>

          <div className="work_inf_mobile">
							<span style={{fontWeight:'700'}}>{this.props.title}</span>, {this.props.category}, {this.props.date}
					</div>
					<div className="work_inf2_mobile">
							{this.props.venue}
					</div>

          <ul className="work_inf">
							<li><span style={{fontWeight:'700'}}>{this.props.title}</span>, {this.props.category}, {this.props.date}</li>
					</ul>
					<ul className="work_inf2">
							<li>{this.props.venue}</li>
					</ul>

        </div>
		);
	}
}

export default Artwork;
