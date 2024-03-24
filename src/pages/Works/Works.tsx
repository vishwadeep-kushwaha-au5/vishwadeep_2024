import { PropsWithChildren } from "react";
import styled from "styled-components";
import ContentDiv from "../../components/styled/Content";
import media from "../../styled/breakpoints";
import flockalong from "./../../assets/projects/flockalong.png";
import gupsgup from "./../../assets/projects/gupshup.png";
import indiaCommerce from "./../../assets/projects/india_commerce.jpg";
import khaobao from "./../../assets/projects/khaobao.jpg";
import portfolio from "./../../assets/projects/portfolio.jpg";
import target from "./../../assets/projects/target.png";
import jsonEditor from "./../../assets/projects/json-editor.png";
import rubix from "./../../assets/projects/rubix.png";
import WorkRow from "../../components/WorkRow/WorkRow";

type NotFoundProps = PropsWithChildren<{ props?: any }>;

const data = [
  {
    project_name: "Rubix",
    desc: "A web app as a one stop solution to allow hospital to create and manage availibilites for schools and students all over US. It has capability to map different branches of hosptials, availibilites in different programs, different tier of schools and placements for students. I got involed in building it's architecture and apis from ground up.",
    tech: ["NestJS", "Azure", "Keycloak", "Keyvault", "Azure Blob Storage"],
    github: null,
    url: "https://rubix.dev.exxat.net/",
    image: rubix,
  },
  {
    project_name: "Visual JSON Editor",
    desc: "A highly tailored JSON editor made for one of our clients to help them manage 10k+ json files and 1M+ lines of data.",
    tech: ["NestJS", "React", "Azure", "Keycloak", "Tailwind", "MUI"],
    github: null,
    url: "https://config-app.dev.exxat.net/layout-summary",
    image: jsonEditor,
  },
  {
    project_name: "FlockAlong",
    desc: "A place where confident travel leaders can create trips for people who can surf through them and join any available trip. The trip creation involves a user-friendly multi-step form that allows to enter description, images, path on map, number of slots, pricing and more.",
    tech: [
      "Gatsby",
      "GraphQL",
      "Algolia",
      "Auth0",
      "Azure Functions",
      "Netlify Functions",
      "Google Maps API",
      "Google Images API",
      "Unsplash",
    ],
    github: null,
    url: "https://flockalong.com",
    image: flockalong,
  },
  {
    project_name: "Target",
    desc: "A small project where user can request goods transport services and track them. It included an driver-app to track driver, an admin panel to manage requests and send billing and a user app to track their goods",
    tech: [
      "NodeJS",
      "React",
      "Android",
      "Google Maps API",
      "Auth0",
      "Azure Blob Storage",
      "Stripe",
      "MUI",
      "Tailwind",
    ],
    github: "https://github.com/vishwadeep-solves-conflicts/target-server",
    url: null,
    image: target,
  },
  {
    project_name: "KhaoBao",
    desc: "A food delivery application which allows customers to make order from restaurants in their neighborhood, pay for their order and track their order.",
    tech: ["NodeJS", "Android", "Firebase"],
    github: "https://github.com/vishwadeep-solves-conflicts/KhaoBao",
    url: null,
    image: khaobao,
  },
  {
    project_name: "India Commerce",
    desc: "A personal endaveour to graph and plot all kinds of trade that India is/was invloved with different countries.",
    tech: [
      "NodeJS",
      "React",
      "Express",
      "Python",
      "Selenium",
      "CSS",
      "MongoDB",
    ],
    github: "https://github.com/vishwadeep-solves-conflicts/india-commerce",
    url: null,
    image: indiaCommerce,
  },
  {
    project_name: "Portfolio",
    desc: "One of my first tries with animation and visualization and building a portfolio site.",
    tech: [
      "NestJS",
      "React",
      "Express",
      "Azure",
      "Keycloak",
      "Azure Blob Storage",
      "Stripe",
      "MUI",
      "Tailwind",
    ],
    github: "https://github.com/vishwadeep-solves-conflicts/portfolio",
    url: null,
    image: portfolio,
  },
  {
    project_name: "GupShup - a social site",
    desc: "One of my very first projects working with back-end and front-end together. It had everything that a social site can offer apart from real-time messaging.",
    tech: ["NodeJS", "React", "Express", "MongoDB", "MUI"],
    github: "https://github.com/vishwadeep-solves-conflicts/gupshup",
    url: null,
    image: gupsgup,
  },
];

type WorksType = {
  project_name: string;
  desc: string;
  tech: string[];
  github: string | null;
  url: string | null;
  image: string;
};

function Work({ props, ...rest }: NotFoundProps) {
  return (
    <ContentDiv {...rest} id="works">
      <div className="sectionTitle">Works</div>
      <>
        {data.map((dataE: WorksType, index: number) => (
          <WorkRow key={index} props={dataE} />
        ))}
      </>
    </ContentDiv>
  );
}

export default styled(Work)`
  padding: 60px 42px;
  overflow: auto;

  .sectionTitle {
    font-size: 18px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
  }

  ${media.md`
    padding: 60px 12px;
  `}
`;
