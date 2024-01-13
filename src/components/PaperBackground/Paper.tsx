import { PropsWithChildren } from "react";
import styled from "styled-components";
import media from "../../styled/breakpoints";

type PaperProps = PropsWithChildren<{ props?: any }>;

function Paper({ props, ...rest }: PaperProps) {
  return <div {...rest}>{rest.children}</div>;
}

export default styled(Paper)`
  display: flex;
  align-items: flex-end;
  width: fit-content;
  height: fit-content;
  margin: 2em auto;
  background: #fff;
  box-shadow: 4px 4px 0 #022449;
  background-image: linear-gradient(
      90deg,
      #fff 12px,
      0,
      #022449 15px,
      0,
      #1373a9 20px,
      0,
      #fff 100%
    ),
    radial-gradient(circle closest-side, rgba(255, 255, 255, 0) 88%, #fff 100%),
    radial-gradient(circle at 22px 8px, #1373a9 40%, #022449 40%, #022449 100%);
  background-size: 32px 8px, 32px 16px, 32px 16px;
  background-repeat: space no-repeat;
  background-position: center top, center 6px, center 6px;
  transform: rotate(-90deg);
  padding-top: 50px;
  padding: 100px 30px;
  writing-mode: vertical-lr;

  ${media.md`
    transform: rotate(0deg);
    writing-mode: horizontal-tb;
    padding: 100px 25px;
    `}
`;
