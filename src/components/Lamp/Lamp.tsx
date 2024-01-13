import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PropsWithChildren } from "react";
import styled from "styled-components";

type LampProps = PropsWithChildren<{ props?: any }>;

function Lamp({ props, ...rest }: LampProps) {

  useGSAP(()=>{
    gsap.to("#light", {
      opacity: 0,
      repeat: 7,
      yoyo: true,
      ease: "power1.inOut",
      duration: function() { return Math.random() * 0.1 + 0.01 },
      delay: 2
    });  })

  return <div {...rest}>
      {/* <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <path d="M 244.336 218.131 Q 246.015 215.008 247.693 218.131 L 300.27 315.975 Q 301.948 319.098 298.592 319.098 L 193.437 319.098 Q 190.081 319.098 191.759 315.975 Z" style={{stroke: "rgb(74, 37, 2)", paintOrder: "fill", fill: "rgb(74, 37, 2)"}} transform="matrix(1, 0, 0, 1, 7.105427357601002e-15, 0)" bxShape="triangle 190.081 215.008 111.867 104.09 0.5 0.03 1@b4283e9d"/>
    <rect x="244.914" y="-0.352" width="2.5" height="217.752" style={{stroke: "rgb(201, 178, 107)", fill: "rgb(201, 178, 107)"}} transform="matrix(1, 0, 0, 1, 7.105427357601002e-15, 0)"/>
  </svg> */}
      <div id="lamp">
        <div id="wire"></div>
        <div id="holder"></div>
        <div id="light"></div>
      </div>
    </div>
}

export default styled(Lamp)`
height: 100%;
#lamp{
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
}

#wire {
  width: 0;
  height: 0;
  border-left: 3px solid #c9b26b;
  border-right: 3px solid #c9b26b;
  border-bottom: 114px solid #c9b26b;
}

#holder{
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid #4C7CB0;
  border-radius: 10%;
  position: relative;
  top: -4px;
  z-index: 2;
}
  #light {
    background: linear-gradient(yellow, transparent);
    height: 100vh;
    width: 800px;
    position: relative;
    top: -47px;
    opacity: 0.35;
    -webkit-clip-path: polygon(50% 0%, 0% 85%, 100% 85%);
    clip-path: polygon(50% 0%, 0% 85%, 100% 85%);
  }
`;
