import './styles/index.css';
import { ReactComponent as CV } from '../components/pictures/cv.svg';
import {ReactComponent as Arrow } from '../components/pictures/arrow.svg'
import {ReactComponent as Linkedin} from '../components/pictures/linkedin.svg'
import {ReactComponent as Fiverr} from '../components/pictures/F.svg'
import {ReactComponent as Github} from '../components/pictures/github.svg'
import {ReactComponent as Homepage} from '../components/pictures/homepage.svg'
import {ReactComponent as Projects} from '../components/pictures/projects.svg'
import { Link } from 'react-router-dom';
//import { ReactComponent as Settings } from './icons/settings.svg';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { MenuList } from './routing/menuList';

const menuList = MenuList.map(({url, title}, index) =>{
  return (
    <li key={index}>
      <ul>
      <a href={url}>{title}</a>
      </ul>
    </li>
  )
})

function Navbar() {
  return (
    <Navbars>
      <NavItem icon={<Arrow/>}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbars>
  );
}

function Navbars(props) {

const [navbar, setNavbar] = useState(false);

const setBackground = () => {
  if(window.scrollY <= 10){
    setNavbar(true)
  }else{
    setNavbar(false)
  }
}

window.addEventListener('scroll', setBackground)
  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#/" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#/" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            goToMenu="settings">
            Media
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            goToMenu="About">
             About
          </DropdownItem>

        </div>
      </CSSTransition>



      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          
          <DropdownItem goToMenu="main" leftIcon="<">
            <h2>Back</h2>
          </DropdownItem>
            <DropdownItem leftIcon={<Linkedin/>}>
              <a href="https://www.linkedin.com/in/faisal-baras-140b5a228">LinkedIn</a>
            </DropdownItem>
            <DropdownItem leftIcon={<Fiverr/>}>
              <a href='https://www.fiverr.com/faisal758?up_rollout=true'>Fiverr</a>
              
            </DropdownItem>
            <DropdownItem leftIcon={<Github/>}>
              <a href='https://github.com/Faisal7589'>Github</a>
            </DropdownItem>
          
        </div>
      </CSSTransition>


      <CSSTransition
        in={activeMenu === 'About'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="<">
            <h2>Back</h2>
          </DropdownItem>
         <DropdownItem leftIcon={<Homepage />}>{menuList[0]}</DropdownItem>
         <DropdownItem leftIcon={<CV />}>{menuList[1]}</DropdownItem>
         <DropdownItem leftIcon={<Projects />}>{menuList[2]}</DropdownItem>
        </div>
      </CSSTransition>

    </div>
  );
}

export default Navbar