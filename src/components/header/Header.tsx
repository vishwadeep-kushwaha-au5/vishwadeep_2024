import { PropsWithChildren, useState } from "react";
import styled from "styled-components";
import media from "../../styled/breakpoints";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import CV from "../../assets/pdfs/Viswadeep_2024.pdf"

type HeaderProps = PropsWithChildren<{ props?: any }>;

function Header({ props, ...rest }: HeaderProps) {
  const [openNav, setOpenNav] = useState(false);
  function closeNavMenu() {
    setOpenNav(false);
  }
  function openNavMenu() {
    setOpenNav(true);
  }
  function openCV(){
    window.open(CV,"_blank")
  }
  return (
    <div {...rest}>
      <div className="logo">Vishwadeep</div>
      <div className="navigationLinks">
        <a href="#home">Home</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#works">Works</a>
        <div className="resumeLink">Resume</div>
      </div>
      <div onClick={openNavMenu} className="showNavButton"><HamburgerIcon/></div>
      <div className={`navgationDialog ${openNav ? "showNavBackDrop" : ""}`}>
        <div onClick={closeNavMenu} className="closeButton">
          x
        </div>
        <div className={`navigationDialogLinks ${openNav ? "showNav" : ""}`}>
          <a onClick={closeNavMenu} href="#home">Home</a>
          <a onClick={closeNavMenu} href="#experience">Experience</a>
          <a onClick={closeNavMenu} href="#skills">Skills</a>
          <a onClick={closeNavMenu} href="#works">Works</a>
          <div className="resumeLink" onClick={openCV}>Resume</div>
        </div>
      </div>
    </div>
  );
}

export default styled(Header)`
  height: 56px;
  position: fixed;
  background: white;
  top: 0;
  z-index: 999;
  display: flex;
  padding: 0px 30px;
  flex-direction: row;
  overflow: auto;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background-color: #022449e0;
  box-shadow: 0 10px 30px -10px #011933;
  
  .showNavButton{
    display: none;
  }

  .logo {
    color: #58dbd3;
  }
  .navigationLinks {
    display: flex;
    align-items: center;
    height: fit-content;
    div {
      color: #58dbd3;
      font-weight: 500;
    }
    a {
      color: aliceblue;
      text-decoration: auto;
      margin-left: 10px;
      font-weight: 500;
    }
    a:hover {
      color: #58dbd3;
    }
  }
  .resumeLink {
    color: #58dbd3;
    border: 2px solid;
    padding: 6px 12px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 15px;
    transition: transform 0.3s;
  }
  .resumeLink:hover {
    transform: translate(-1px, -1px);
    box-shadow: 2px 2px 0px 0px #58dbd3;
    -moz-box-shadow: 2px 2px 0px 0px #58dbd3;
    -webkit-box-shadow: 2px 2px 0px 0px #58dbd3;
  }

  .showNavButton{
    display: none;
  }

  ${media.md`
  .navigationLinks{
    display: none;
  }
  .showNavButton{
    display: block;
  }
  `}
  .closeButton {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0px 6px;
    color: white;
    z-index: 2;
    font-size: 32px;
  }
  .navgationDialog {
    position: fixed;
    background: #ffffff52;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    transition: visibility 0s;
    visibility: hidden;
  }

  .navigationDialogLinks {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #1b395b;
    width: 0%;
    position: absolute;
    top: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    transition: width 0.3s, visibility 0s;
    a {
      color: ${(props) => props.theme.colors.primary};
      text-decoration: auto;
      padding: 10px 12px;
      border-radius: 5px;
    }
    a:hover {
      color: #58dbd3;
      background: #677b91;
    }
    .resumeLink {
      margin-top: 10px;
    }
  }

  .showNav {
    width: 80%;
    visibility: visible;
  }
  .showNavBackDrop{
    visibility: visible;
  }
`;
