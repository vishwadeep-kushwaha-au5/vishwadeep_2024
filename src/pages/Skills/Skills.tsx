import { PropsWithChildren } from "react";
import styled from "styled-components";
import ContentDiv from "../../components/styled/Content";
import TextPill from "../../components/TextPill/TextPill";
import media from "../../styled/breakpoints";

type SkillsProps = PropsWithChildren<{ props?: any }>;
type titleType =
  | "Front-End"
  | "Back-End"
  | "3rd Party APIs"
  | "DevOps"
  | "Data";

const data = {
  "Front-End": [
    "React",
    "Gatsby",
    "MUI",
    "Tailwind",
    "GSAP",
    "Vue",
    "GraphQL",
  ],
  "Back-End": [
    "NodeJS",
    "NestJS",
    "Express",
    "Postgres",
    "MongoDB",
    "CosmosDB",
    "Keycloak",
    "Auth0",
    "Algolia",
    "Azure Functions",
    "Netlify Functions",
  ],
  "3rd Party APIs": [
    "Google Maps",
    "Google Images",
    "CoinDesk",
    "Unsplash",
    "Cloudinary",
  ],
  DevOps: [
    "Azure DevOps",
    "Azure Blob Storage",
    "Docker",
    "Kubernetics",
    "Keyvault",
  ],
  Data: ["Python", "Numpy", "Panda", "Excel", "Power BI"],
};

function Skills({ props, ...rest }: SkillsProps) {
  const keys = Object.keys(data) as titleType[];
  return (
    <ContentDiv {...rest} id="skills">
      <div className="sectionTitle">Skills</div>
      {keys.map((title: titleType) => (
        <div key={title} className="skillGroupWrappper">
          <div className="skillGroupTitle">
            <span>{title}</span>
          </div>
          <div className="skillsWrapper">
            {data[title].map((skill: string) => (
              <TextPill key={title + skill}>{skill}</TextPill>
            ))}
          </div>
        </div>
      ))}
    </ContentDiv>
  );
}

export default styled(Skills)`
padding: 60px 42px 0px 42px;
overflow: auto;
  /* .skillGroupTitle{
        
    } */
  .skillGroupWrappper{}
  .skillGroupTitle {
    opacity: 0.7;
    height: 13px;
    border-bottom: 3px solid ${props=>props.theme.colors.primary};
    padding-left: 6%;
    position: relative;
    color: ${(props) => props.theme.colors.primary};
    font-size: 20px;
    font-family: Quicksand;
    font-weight: 700;
  }
  .skillGroupTitle > span {
    background-color: ${props=>props.theme.colors.background};
    padding: 0 10px;
  }
  .skillsWrapper{
    padding: 20px 30px 0px 20px;
    display: flex;
    flex-wrap: wrap;
  }
  .sectionTitle{
    font-size: 18px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
    margin-bottom: 20px;
  }
  ${media.md`
    padding: 60px 12px;
  `}
`;
