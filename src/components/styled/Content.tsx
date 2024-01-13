import styled from "styled-components";

const ContentDiv = styled.div`
  padding-top: 56px; //42px is the height of the header
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.background};
`;

export default ContentDiv;
