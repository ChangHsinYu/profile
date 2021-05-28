import React from 'react';
import Link from 'gatsby-link';
import { GatsbyImage } from "gatsby-plugin-image";

class Artwork extends React.Component {
	render() {
		return (
        <div className="work">

          <Link to={this.props.to}>
								<div className="work_img">
									<GatsbyImage image={this.props.img} style={{width:'100%', height:'100%'}} alt='artwork'/>
								</div>
					</Link>

          <div className="work_inf_mobile">
							{this.props.title}, {this.props.category}, {this.props.date}
					</div>

          <ul className="work_inf">
							<li style={{fontWeight:'700'}}>{this.props.title}<br /><br /></li>
							<li>{this.props.category}<br /></li>
							<li>{this.props.date}</li>
					</ul>

        </div>
		);
	}
}

export default Artwork;
