import { PropsWithChildren } from "react";
import styled from "styled-components";

type TextPillProps = PropsWithChildren<{ props?: any; small?: boolean }>;

function TextPill({ props, small = false, ...rest }: TextPillProps) {
  return (
    <div {...rest}>
      <div className={small ? "small" : "normal"}>{rest.children}</div>
    </div>
  );
}

export default styled(TextPill)`
  .normal {
    background-color: #133051;
    color: #58dbd3;
    padding: 10px 20px;
    border-radius: 50px;
    margin-right: 25px;
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .small {
    background-color: #133051;
    color: #58dbd3;
    padding: 8px 20px;
    border-radius: 50px;
    margin-right: 20px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 14px;
  }
`;
