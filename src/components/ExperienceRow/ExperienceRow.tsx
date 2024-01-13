import { PropsWithChildren } from "react";
import styled from "styled-components";
import TextPill from "../TextPill/TextPill";
import media from "../../styled/breakpoints";

type ExperienceRowProps = PropsWithChildren<{ props?: any }>;

function ExperienceRow({ props, ...rest }: ExperienceRowProps) {
  return (
    <div {...rest}>
      <div className="date">{props.date}</div>
      <div className="jobDesc">
        <div className="companyName">{props.company_name}</div>
        <div className="position">{props.position}</div>
        <div className="desc">{props.desc}</div>
        <div className="techs">
          {props.tech.map((t: any) => (
            <TextPill small={true} key={t}>
              {t}
            </TextPill>
          ))}
        </div>
      </div>
    </div>
  );
}

export default styled(ExperienceRow)`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  margin-top: 18px;
  color: ${(props) => props.theme.colors.primary};
  .date {
    font-size: 14px;
    opacity: 0.3;
  }
  .jobDesc {
    max-width: 80%;
  }
  .companyName {
    font-size: 16px;
    font-weight: 600;
  }
  .position {
    font-size: 16px;
    margin-bottom: 10px;
    opacity: 0.3;
    font-weight: 600;
  }
  .desc {
    font-size: 15px;
    margin-bottom: 10px;
    opacity: 0.5;
  }
  .techs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  ${media.md`
    .jobDesc {
      max-width: 90%;
    }
  `}
`;
