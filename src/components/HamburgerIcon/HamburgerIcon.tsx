import { PropsWithChildren } from "react"
import styled from "styled-components"

type HamburgerIconProps = PropsWithChildren<{props?: any}>

function HamburderIcon({props, ...rest}: HamburgerIconProps){
    return <div {...rest}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    
}

export default styled(HamburderIcon)`
  display: inline-block;
  cursor: pointer;

.line {
  width: 35px;
  height: 3px;
  background-color: ${props=> props.theme.colors.primary};
  margin: 6px 0;
}
`