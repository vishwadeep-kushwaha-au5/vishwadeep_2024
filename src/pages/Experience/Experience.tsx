import { PropsWithChildren } from "react";
import styled from "styled-components";
import ContentDiv from "../../components/styled/Content";
import ExperienceRow from "../../components/ExperienceRow/ExperienceRow";
import media from "../../styled/breakpoints";

type NotFoundProps = PropsWithChildren<{ props?: any }>;

const data = [{
  date: "Aug 2022 - Present",
  company_name: "SLEEKSKY",
  position: "Software developer",
  desc: "I am responsible for building robust backend and frontend using react, node, nest.js and technologies around it. While at Sleeksky, I worked on a CMS, adding payment feature and a json visual form editor; and on a University-Hospital Student placement management application.",
  tech:["NestJS", 'React', 'Express', "Azure", "Keycloak", "Azure Blob Storage", "Stripe", "MUI", "Tailwind" ]
},
{
  date: "Dec 2020 - Aug 2022",
  company_name: "FLOCKALONG",
  position: "Web developer",
  desc: "I was responsible for developing Gatsby based Front-End which served as a platform for customers to create, join and manage trips. Developed and deployed Back-End on Azure to facilitate the front-end. Implemented Algolia search engine and automated data updating to Algolia servers.",
  tech:["Gatsby", "Nodejs", "Netlify Functions", "C#", "Auth0", "Google", "Maps", "Algolia", "Cypress"]
},
{
  date: "Dec 2018 - Nov 2019",
  company_name: "KHAOBAO",
  position: "Operations Manager",
  desc: "I was responsible for development of Android Apps - Customer Side and Delivery Guy app. In parallel I was handling day to day operations including signing new restaurants, improving customer experience and launching new services. Completed 40k successful orders over a period of more than 14 months",
  tech:["Java", "Android", "Javascript", "Firebase", "Power BI", "Photoshop"]
}]

type Experience = {
  date: string;
  company_name: string;
  position: string;
  desc: string;
  tech: string[]
}

function Experience({ props, ...rest }: NotFoundProps) {
  return (
    <ContentDiv {...rest} id="experience">
      <div className="sectionTitle">Experience</div>
      <>
      {data.map((dataE: Experience, index: number)=>
        <ExperienceRow key={index} props={dataE}/>
      )}</>
    </ContentDiv>
  );
}

export default styled(Experience)`
  padding: 60px 42px;
  overflow: auto;

  .sectionTitle{
    font-size: 18px;
    text-transform: uppercase;
    color: ${props=> props.theme.colors.primary};
    font-weight: 600;
  }

  ${media.md`
    padding: 60px 12px;
  `}
`;
