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

const Head = () =>{
    return(
      <div>
        <div id="menu_mobile">
          <div style={{marginTop:'120px',marginLeft:'5%',width:'90%'}}>
            <Link to="/cv"><div id="aa" onClick={showMenu}><br/><br/>CV<br/><br/></div></Link>
            <hr/><Link to="/artworks"><div id="aa" onClick={showMenu}><br/><br/>ARTWORKS<br/><br/></div></Link>
            <hr/><Link to="/performances"><div id="aa" onClick={showMenu}><br/><br/>PERFORMANCES<br/><br/></div></Link>
            <hr/><Link to="/projects"><div id="aa" onClick={showMenu}><br/><br/>NEW MEDIA PROJECTS<br/><br/></div></Link>
            <hr/><Link to="/codearts"><div id="aa" onClick={showMenu}><br/><br/>CREATIVE CODINGS<br/><br/></div></Link>
            </div>
          <div id="contact_mobile">
            <a href="https://www.facebook.com/profile.php?id=100002291973060&viewas=&show_switched_toast=false" target="_blank"><img src={fbicon} id="icon" /></a>
            <a href="Mailto:eddyeddy5825945@gmail.com"><img src={mailicon} id="icon" /></a>
            <a href="https://www.instagram.com/hsiinyu.c/" target="_blank"><img src={igicon} id="icon" /></a>
            <a href="https://www.youtube.com/channel/UCX6nVMS9VkKdd-oJ_Dqd0Vg" target="_blank"><img src={yticon} id="icon" /></a>
            <a href="https://vimeo.com/changhsinyu" target="_blank"><img src={vmicon} id="icon" /></a>
            <a href="https://twitter.com/ChangHsinYu3" target="_blank"><img src={twicon} id="icon" /></a>
            <a href="https://github.com/ChangHsinYu" target="_blank"><img src={giticon} id="icon" /></a>
            <a href="https://www.hicetnunc.xyz/tz/tz1PpCGDRWH757zKZKHuFHbjcCPg6C5snsrz" target="_blank"><img src={shpicon} id="icon" /></a>
          </div>
        </div>
        <div id="bar">
          <div id="title"><Link to="/" id="home_a">CHANG&nbsp;HSIN-YU</Link></div>
          <div id="menu_icon" onClick={showMenu}>
            <img src={menuicon} style={{width:'100%'}} />
          </div>
          <div id="menu">
            <Link to="/cv" id="aa_cv">CV</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/artworks" id="aa_work">ARTWORKS</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/performances" id="aa_performence">PERFORMANCES</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/projects" id="aa_project">NEW MEDIA PROJECTS</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/codearts" id="aa_creative">CREATIVE CODINGS</Link>
          </div>
        </div>
      </div>
    );
}

const Foot = () =>{
  return(
    <div style={{width:'100%',float:'left'}}>
      <div id="contact">
        <a href="https://www.facebook.com/profile.php?id=100002291973060&viewas=&show_switched_toast=false" target="_blank"><img src={fbicon} id="icon" /></a>
        <a href="Mailto:eddyeddy5825945@gmail.com"><img src={mailicon} id="icon" /></a>
        <a href="https://www.instagram.com/hsiinyu.c/" target="_blank"><img src={igicon} id="icon" /></a>
        <a href="https://www.youtube.com/channel/UCX6nVMS9VkKdd-oJ_Dqd0Vg" target="_blank"><img src={yticon} id="icon" /></a>
        <a href="https://vimeo.com/changhsinyu" target="_blank"><img src={vmicon} id="icon" /></a>
        <a href="https://twitter.com/ChangHsinYu3" target="_blank"><img src={twicon} id="icon" /></a>
        <a href="https://github.com/ChangHsinYu" target="_blank"><img src={giticon} id="icon" /></a>
        <a href="https://www.hicetnunc.xyz/tz/tz1PpCGDRWH757zKZKHuFHbjcCPg6C5snsrz" target="_blank"><img src={shpicon} id="icon" /></a>
        </div>
      <div id="copyright">CHANG HSIN YU © 2020</div>
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
