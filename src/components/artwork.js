import React from 'react';
import Link from 'gatsby-link';

class Artwork extends React.Component {
	render() {
		return (
      <div>
        <div className="work">
          <Link to={this.props.to}>
							<img className="work_img" src={this.props.img} alt='my artwork'/>
					</Link>
          <div className="work_inf_mobile">{this.props.title}, {this.props.category}, {this.props.year}</div>
          <div className="work_inf"><span style={{fontWeight:'700'}}>{this.props.title}</span><br /><br />{this.props.category}<br />{this.props.year}</div>
        </div>
      </div>
		);
	}
}

export default Artwork;
