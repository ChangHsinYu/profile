import React from 'react';
import { Link } from 'gatsby'
import FadeIn from '../utils/fade-in';
import './layout.css';
import fbicon from '../icon/fb.png';
import mailicon from '../icon/mail.png';
import igicon from '../icon/ig.png';
// import yticon from '../icon/yt.png';
import vmicon from '../icon/vm.png';
import twicon from '../icon/tw.png';
import giticon from '../icon/git.png';
import menuicon from '../icon/menu.png';


const ListLink = (props) => {
  const isMobile = props.mobile;
  if(isMobile){
    return(
      <li>
        <Link to={props.to}>
          <button className="aa" onClick={props.click}>
            <br/><br/>{props.children}<br/><br/>
          </button>
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

const Icon = (props) =>{
  return(
    <li style={{display:`inline`}}>
      <a href={props.href} target="_blank" rel="noreferrer">
        <img src={props.icon} className="icon" alt="icon"/>
      </a>
    </li>
  );
}

const Contact = props =>(
  <ul className={props.className}>
      <Icon href="https://www.facebook.com/profile.php?id=100002291973060&viewas=&show_switched_toast=false" icon={fbicon} />
      <Icon href="Mailto:eddyeddy5825945@gmail.com" icon={mailicon} />
      <Icon href="https://www.instagram.com/hsiinyu.c/" icon={igicon} />
      <Icon href="https://vimeo.com/changhsinyu" icon={vmicon} />
      <Icon href="https://twitter.com/ChangHsinYu3" icon={twicon} />
      <Icon href="https://github.com/ChangHsinYu" icon={giticon} />
  </ul>
)

const Foot = () =>{
  return(
    <div style={{width:'100%',float:'left'}}>
        <Contact className="contact"/>
        <div className="copyright">CHANG HSIN YU © 2024</div>
    </div>
  );
}


class Layout extends React.Component {
  constructor() {
		super();
		this.state = {
			open: false,
		};
    this.onClick = this.onClick.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
	}

	onClick() {
		const { open } = this.state;
		if (open) {
			this.closeMenu();
		} else {
			this.openMenu();
		}
	}

	openMenu() {
    document.getElementById('menu').style.height = '100%';
		document.getElementById('menu').style.opacity = '0.9';
		this.setState({
			open: true,
		});
	}

	closeMenu() {
		document.getElementById('menu').style.opacity = '0';
    document.getElementById('menu').style.height = '0%';
		this.setState({
			open: false,
		});

	}

  render(){
    return(
        <main>
          <title>{this.props.pageTitle}</title>
          <div className="menu_mobile" id='menu'>
          {
            this.state.open
              ? (
                  <FadeIn
                    opacity={{
                      start: 0,
                      end: 1,
                      stiffness: 120,
                      damping: 17,
                    }}
                  >
                    <ul className='menu_mobile_list'>
                      <FadeIn x={{start: 20, end: 0, stiffness: 100, damping: 20,}}>
                        <ListLink to="/cv"            mobile={true} click={this.closeMenu}>CV</ListLink>
                      </FadeIn>
                      <hr/>
                      <FadeIn x={{start: 60, end: 0, stiffness: 100, damping: 20,}}>
                        <ListLink to="/artworks"      mobile={true} click={this.closeMenu}>WORKS</ListLink>
                      </FadeIn>
                      <hr/>
                      <FadeIn x={{start: 100, end: 0, stiffness: 100, damping: 20,}}>
                        <ListLink to="/collaborations"  mobile={true} click={this.closeMenu}>COLLABORATIONS</ListLink>
                      </FadeIn>
                      <hr/>
                      <FadeIn x={{start: 140, end: 0, stiffness: 100, damping: 20,}}>
                        <ListLink to="/projects"      mobile={true} click={this.closeMenu}>PROJECTS</ListLink>
                      </FadeIn>
                      <hr/>
                      <FadeIn x={{start: 180, end: 0, stiffness: 100, damping: 20,}}>
                        <ListLink to="/codearts"      mobile={true} click={this.closeMenu}>CREATIVE CODINGS</ListLink>
                      </FadeIn>
                      <hr/>
                    </ul>
                    <Contact className='contact_mobile'/>
                  </FadeIn>
                )
                : (
                  null
                  )
          }
          </div>


          <div className='bar'>
            <Link to="/" className='title'>CHANG&nbsp;HSIN-YU</Link>
            <button className='menu_icon' onClick={this.onClick}>
              <img src={menuicon} style={{width:'100%'}} alt="menu icon"/>
            </button>
            <ul className='menu'>
              <ListLink to="/cv"            mobile={false}>CV</ListLink>
              <ListLink to="/artworks"      mobile={false}>WORKS</ListLink>
              <ListLink to="/collaborations"  mobile={false}>COLLABORATIONS</ListLink>
              <ListLink to="/projects"      mobile={false}>PROJECTS</ListLink>
              <ListLink to="/codearts"      mobile={false}>CREATIVE CODINGS</ListLink>
            </ul>
          </div>
          <FadeIn
              opacity={{
    						start: 0,
    						end: 1,
    						stiffness: 200,
    						damping: 5,
              }}
            >
              {this.props.children}
          </FadeIn>
          <Foot />
        </main>
    );
  }
}

export default Layout
