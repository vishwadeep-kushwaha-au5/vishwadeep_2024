import styled from "styled-components";
import { type PropsWithChildren } from "react";
import Avatar from "../../components/Avatar/Avatar";
import media from "../../styled/breakpoints";
import ContentDiv from "../../components/styled/Content";
import PieChart from "../../components/PieChart/PieChart";
import Paper from "../../components/PaperBackground/Paper";
import Lamp from "../../components/Lamp/Lamp";

type HomeProps = PropsWithChildren<{ props?: any }>;

function Home({ props, ...rest }: HomeProps) {
  return (
    <ContentDiv {...rest} id="home">
      <div className="socialIcons">
        <a href="https://www.linkedin.com/in/vish-kushwaha/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
        </a>
        <a href="https://github.com/vishwadeep-solves-conflicts" target="_blacnk">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
      </div>
      <div className="avatarWrapper">
        <Avatar />
        <div className="summary">
          <span className="tertiary">Hi there!</span>
          <span className="primary">I am Vishwadeep.</span>
          <span className="tertiary">
            I enjoy working on front-end and back-end to build we apps.
          </span>
          <span className="secondary">I love bringing ideas to life.</span>
        </div>
      </div>
      <div className="studyWrapper">
        <div className="lampWrapper">
          <Lamp />
        </div>
        <div className="paperWrapper">
          <Paper>
            <div className="pieChart">
              <PieChart />
            </div>

            <ul className="chartLegend">
              <li className="fe">Front-End</li>
              <li className="be">Back-End</li>
              <li className="pd">Product Design</li>
            </ul>
          </Paper>
        </div>
      </div>
    </ContentDiv>
  );
}

export default styled(Home)`
  display: grid;
  grid-template-columns: 0.65fr 1fr;
  height: 100%;
  min-height: 850px;
  
  .socialIcons{
    height: 17px;
    border-bottom: 3px solid ${props=>props.theme.colors.primary};
    padding-left: 6%;
    position: relative;
    color: ${(props) => props.theme.colors.primary};
    font-size: 20px;
    font-family: Quicksand;
    font-weight: 700;
    transform: rotate(90deg);
    position: fixed;
    right: -120px;
    top: 0;
    z-index: 99;
    width: 250px;
    text-align: end;
  }
  
  .socialIcons > a {
    color: ${(props) => props.theme.colors.primary};
  }

  .socialIcons > a:hover {
    color: #58dbd3
  }


  .socialIcons > a > svg {
    background-color: ${props=>props.theme.colors.background};
    height: 25px;
    transform: rotate(-90deg);
    margin: 3px;
    padding: 3px;
  }

  .avatarWrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .summary{
    display: flex;
    flex-direction: column;
    font-size: 26px;
    padding: 0 20px;
    text-transform: uppercase;
    font-family: Signika;
    .primary{
        color: ${(props) => props.theme.colors.primary}
    }
    
    .secondary{
        color: ${(props) => props.theme.colors.secondary};
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        font-size: 24px;
    }
    
    .tertiary{
        color: ${(props) => props.theme.colors.tertiary}
    }
  }
  .studyWrapper {
    overflow: hidden;
    position: relative;
  }

  .lampWrapper {
    position: absolute;
    z-index: 99;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    pointer-events: none;
  }

  .paperWrapper {
    position: absolute;
    bottom: -100px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    font-family: Nanum Pen Script;
  }

  .chartLegend {
    color: #558dca;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: column-reverse;
    cursor: pointer;
  
    li{
        list-style:none;
        margin
    }
    li.fe{
        color: #4C7CB0;
    }
    li.be{
        color: ${(props) => props.theme.colors.tertiary};
    }
    li.pd{
        color: #8FB8E3;
    }
    li.fe::before {
        content: "\\25a0";
        font-size: 0.75rem;
        margin-bottom: 5px;
    }
    li.be::before {
        content: "\\25a0";
        font-size: 0.75rem;
        margin-bottom: 5px;
    }
    li.pd::before {
        content: "\\25a0";
        font-size: 0.75rem;
        margin-bottom: 5px;
    }
  }
  ${media.md`
        grid-template-columns: 1fr;
        .avatarWrapper{
            display: none;
        }
        .studyWrapper{
        }
        .paperWrapper{
            bottom: 20px;
        }
        .chartLegend{
            flex-direction: column;
            li{
                display: flex
            }
            
            li.fe::before {
                margin-right: 5px;
                margin-top: 5px;
            }
            li.be::before {
                margin-right: 5px;
                margin-top: 5px;
            }
            li.pd::before { 
                margin-right: 5px;
                margin-top: 5px;
            }
        }
    `}
`;
