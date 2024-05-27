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
  desc: `Worked on implementing in house translations on backend.
  Helped improve performance of analytics functions and
  decreased response time by 80%.
  Lead design and development of backends using Nest.js.
  Helped to create interactive UI for JSON editor using React.
  Worked on developing data driven site using EJS.
  Implemented payment method with Stripe on Node server.
  Helped setting up CI/CD with docker and kubernatics.`,
  tech:["NestJS", 'React', 'Express', "Azure", "Keycloak", "Azure Blob Storage", "Stripe", "MUI", "Tailwind", "Kubernetes", "Docker" ]
},
{
  date: "Dec 2020 - Aug 2022",
  company_name: "FLOCKALONG",
  position: "Web developer",
  desc: `While at FlockAlong, I worked with Gatsby, Nodejs, Netlify
  Functions, C#, Auth0, Google Maps, Algolia, Cypress.
  I was responsible for developing Gatsby based Front-End which
  served as a platform for customers to create, join and manage
  trips.
  Helped developing parts of Back-End wriiten in C# and Node.
  Implemented Algolia search engine and automated data
  upload/update to Algolia servers
  Implemented authentication/authorization flow with Auth0.`,
  tech:["Gatsby", "Nodejs", "Netlify Functions", "C#", "Auth0", "Google", "Maps", "Algolia", "Cypress"]
},
{
  date: "Dec 2018 - Nov 2019",
  company_name: "KHAOBAO",
  position: "Operations Manager",
  desc: `I was responsible for development of Android Apps - Customer
  Side and Delivery Guy app.
  In parallel I was handling day to day operations including
  signing new restaurants, improving customer experience and
  launching new services.
  Completed 40k successful orders over a period of more than 14
  months.`,
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
