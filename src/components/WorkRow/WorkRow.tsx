import { PropsWithChildren } from "react";
import styled from "styled-components";
import media from "../../styled/breakpoints";

type WorkRowProps = PropsWithChildren<{ props?: any }>;

function WorkRow({ props, ...rest }: WorkRowProps) {
  return (
    <div {...rest}>
      <div className="heroSectionWrapper">
        <img className="workImage" src={props.image} />
        <div className="techs">
          <a href={props.github} target="_blank" className="actionIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href={props.url} target="_blank" className="actionIcon visitLink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>External Link</title>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
      <div className="workDesc">
        <div className="workName">{props.project_name}</div>
        <div className="desc">{props.desc}</div>
        <div className="techs">{props.tech.join(", ")}</div>
      </div>
    </div>
  );
}

export default styled(WorkRow)`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  padding: 18px 5px 0px 18px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  &:hover{
    background-color: #ffffff12;
  }
  .heroSectionWrapper {
    margin-right: 25px;
  }
  .workImage {
    width: 100%;
    height: 120px;
    border-radius: 10px;
  }
  .workDesc {
    max-width: 80%;
  }
  .workName {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .desc {
    font-size: 15px;
    opacity: 0.5;
    margin-bottom: 20px;
  }
  .techs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    font-size: 14px;
  }
  .actionIcon {
    width: 20px;
    margin-top: 10px;
    cursor: pointer;
  }
  .visitLink {
    margin-left: 10px;
  }
  .actionIcon, .actionIcon:visited{
    color: ${props=>props.theme.colors.primary}
  }
  .actionIcon:hover {
    color: #58dbd3;
  }
  
  ${media.md`
    grid-template-columns: 0.5fr 1fr;
    padding: 18px 5px 0px 5px;
    .workDesc {
      max-width: 90%;
    }
  `}
`;
