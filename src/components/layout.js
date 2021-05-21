import * as React from 'react'
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

function showMenu(){
  if(document.getElementById("menu_mobile").style.display != 'none'){
      document.getElementById("menu_mobile").style.display = 'none';
  }
  else{
      document.getElementById("menu_mobile").style.display = 'block';
  }
}

const ListLink = (props) => {
  const isMobile = props.mobile;
  if(isMobile){
    return(
      <li style={{display: `inline-block`}}>
          <Link to={props.to} className="aa" onClick={showMenu}>
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
      <Icon href="Mailto:eddyeddy5825945@gmail.com" icon={mailicon} className="icon" />
      <Icon href="https://www.instagram.com/hsiinyu.c/" icon={igicon} className="icon" />
      <Icon href="https://www.youtube.com/channel/UCX6nVMS9VkKdd-oJ_Dqd0Vg" icon={yticon} className="icon" />
      <Icon href="https://vimeo.com/changhsinyu" icon={vmicon} className="icon" />
      <Icon href="https://twitter.com/ChangHsinYu3" icon={twicon} className="icon" />
      <Icon href="https://github.com/ChangHsinYu" icon={giticon} className="icon" />
      <Icon href="https://www.hicetnunc.xyz/tz/tz1PpCGDRWH757zKZKHuFHbjcCPg6C5snsrz" icon={shpicon} className="icon" />
  </ul>
)


const Head = () =>{
    return(
      <div>
        <div id="menu_mobile">
          <ul className='menu_mobile_list'>
            <li><Link to="/cv"><div className="aa" onClick={showMenu}><br/><br/>CV<br/><br/></div></Link><hr/></li>
            <li><Link to="/artworks"><div className="aa" onClick={showMenu}><br/><br/>ARTWORKS<br/><br/></div></Link><hr/></li>
            <li><Link to="/performances"><div className="aa" onClick={showMenu}><br/><br/>PERFORMANCES<br/><br/></div></Link><hr/></li>
            <li><Link to="/projects"><div className="aa" onClick={showMenu}><br/><br/>NEW MEDIA PROJECTS<br/><br/></div></Link><hr/></li>
            <li><Link to="/codearts"><div className="aa" onClick={showMenu}><br/><br/>CREATIVE CODINGS<br/><br/></div></Link></li>
          </ul>
          <Contact className='contact_mobile'/>
        </div>

        <div className='bar'>
          <Link to="/" className='title'>CHANG&nbsp;HSIN-YU</Link>
          <div className='menu_icon' onClick={showMenu}>
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
      </div>
    );
}

const Foot = () =>{
  return(
    <div style={{width:'100%',float:'left'}}>
        <Contact className="contact"/>
        <div className="copyright">CHANG HSIN YU © 2020</div>
    </div>
  );
}

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <title>{pageTitle}</title>
        <Head />
          {children}
        <Foot />
    </main>
  )
}
export default Layout
