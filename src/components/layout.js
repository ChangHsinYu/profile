import React, { Component } from 'react';
import { Link } from 'gatsby'
import './layout.css';
import fbicon from '../icon/fb.png';
import mailicon from '../icon/mail.png';
import igicon from '../icon/ig.png';
import yticon from '../icon/yt.png';
import vmicon from '../icon/vm.png';
import twicon from '../icon/tw.png';
import giticon from '../icon/git.png';
import shpicon from '../icon/shp.png';
import menuicon from '../icon/menu.png';


const ListLink = (props) => {
  const isMobile = props.mobile;
  if(isMobile){
    return(
      <li style={{display: `inline-block`}}>
          <Link to={props.to} className="aa">
              <div  ><br/><br/>{props.children}<br/><br/></div>
              <hr/>
          </Link>
      </li>
    );
  }
  else{
    return(
      <li style={{display: `inline-block`,marginLeft: `2rem`}}>
            <Link to={props.to} className='menu_link'>
                  {props.children}
            </Link>
      </li>
    );
  }
}

const Icon = props =>(
  <li style={{display:`inline`}}>
    <a href={props.href} target="_blank">
      <img src={props.icon} className="icon" />
    </a>
  </li>
)

const Contact = props =>(
  <ul className={props.className}>
      <Icon href="https://www.facebook.com/profile.php?id=100002291973060&viewas=&show_switched_toast=false" icon={fbicon} />
      <Icon href="Mailto:eddyeddy5825945@gmail.com" icon={mailicon} />
      <Icon href="https://www.instagram.com/hsiinyu.c/" icon={igicon} />
      <Icon href="https://www.youtube.com/channel/UCX6nVMS9VkKdd-oJ_Dqd0Vg" icon={yticon} />
      <Icon href="https://vimeo.com/changhsinyu" icon={vmicon} />
      <Icon href="https://twitter.com/ChangHsinYu3" icon={twicon} />
      <Icon href="https://github.com/ChangHsinYu" icon={giticon} />
      <Icon href="https://www.hicetnunc.xyz/tz/tz1PpCGDRWH757zKZKHuFHbjcCPg6C5snsrz" icon={shpicon} />
  </ul>
)

const Foot = () =>{
  return(
    <div style={{width:'100%',float:'left'}}>
        <Contact className="contact"/>
        <div className="copyright">CHANG HSIN YU © 2020</div>
    </div>
  );
}


class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
  }
  showMenu = () => {
   this.setState(prevState => ({
     showMenu: !prevState.showMenu
   }))
  }

  render(){
    return(
      <main>
        <title>{this.props.pageTitle}</title>

      {
          this.state.showMenu
            ? (
              <div id="menu_mobile"
                   ref={(element) => {
                     this.dropdownMenu = element;
                   }}
              >
                <ul className='menu_mobile_list'>
                  <li><Link to="/cv"><div className="aa"><br/><br/>CV<br/><br/></div></Link><hr/></li>
                  <li><Link to="/artworks"><div className="aa"><br/><br/>ARTWORKS<br/><br/></div></Link><hr/></li>
                  <li><Link to="/performances"><div className="aa"><br/><br/>PERFORMANCES<br/><br/></div></Link><hr/></li>
                  <li><Link to="/projects"><div className="aa"><br/><br/>NEW MEDIA PROJECTS<br/><br/></div></Link><hr/></li>
                  <li><Link to="/codearts"><div className="aa"><br/><br/>CREATIVE CODINGS<br/><br/></div></Link></li>
                </ul>
                <Contact className='contact_mobile'/>
              </div>
            )
            : (
              null
            )
        }


        <div className='bar'>
          <Link to="/" className='title'>CHANG&nbsp;HSIN-YU</Link>
          <div className='menu_icon' onClick={this.showMenu}>
            <img src={menuicon} style={{width:'100%'}} />
          </div>

          <ul className='menu'>
            <ListLink to="/cv"            mobile={false}>CV</ListLink>
            <ListLink to="/artworks"      mobile={false}>ARTWORKS</ListLink>
            <ListLink to="/performances"  mobile={false}>PERFORMANCES</ListLink>
            <ListLink to="/projects"      mobile={false}>NEW MEDIA PROJECTS</ListLink>
            <ListLink to="/codearts"      mobile={false}>CREATIVE CODINGS</ListLink>
          </ul>

        </div>
        {this.props.children}
      <Foot />
  </main>
    );
  }
}

export default Layout
