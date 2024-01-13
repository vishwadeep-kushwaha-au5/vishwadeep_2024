import styled from "styled-components";
import { gsap } from "gsap";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { debounce } from "../../utils/helper";

function percentage(partialValue: number, totalValue: number) {
  return (100 * partialValue) / totalValue;
}

gsap.registerPlugin(CustomEase);

type AvatarProps = PropsWithChildren<{ props?: any }>;

function Avatar({ props, ...rest }: AvatarProps) {
  const container = useRef<HTMLDivElement>(null);

  const [xPosition, setXPosition] = useState(null);
  const [yPosition, setYPosition] = useState(null);
  const [storedXPosition, setStoredXPosition] = useState(null);
  const [storedYPosition, setStoredYPosition] = useState(null);
  const [dizzyIsPlaying, setDizzyIsPlaying] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const blink = gsap.timeline({
    repeat: -1,
    repeatDelay: 3,
    paused: false,
  });

  const meTl = gsap.timeline({
    onComplete: animateFace,
  });

  const dizzy = gsap.timeline({
    paused: true,
    onComplete: () => {
      setDizzyIsPlaying(false);
    },
  });

  // gsap can use queryselector in the quick setter but this is better for performance as it touches the DOM less
  const dom = {
    face: document.querySelector(".face"),
    eye: document.querySelectorAll(".eye"),
    innerFace: document.querySelector(".inner-face"),
    hairFront: document.querySelector(".hair-front"),
    shadow: document.querySelectorAll(".shadow"),
    ear: document.querySelectorAll(".ear"),
    eyebrowLeft: document.querySelector(".eyebrow-left"),
    eyebrowRight: document.querySelector(".eyebrow-right"),
  };

  // function addMouseEvent() {
  //   const safeToAnimate = window.matchMedia(
  //     "(prefers-reduced-motion: no-preference)"
  //   ).matches;

  //   if (safeToAnimate) {
  //     // gsap's RAF, falls back to set timeout
  //     gsap.ticker.add(animateFace);

  //     blink.play();
  //   }
  // }

  function updateScreenCoords(event: any) {
    if (!dizzyIsPlaying) {
      setXPosition(event.clientX);
      setYPosition(event.clientY);
    }
    if (!dizzyIsPlaying && Math.abs(event.movementX) > 500) {
      setDizzyIsPlaying(true);
      dizzy.restart();
    }
  }

  const debouncedUpdateScreenCoords = debounce(updateScreenCoords, 0);

  function animateFace() {
    if (!xPosition || !yPosition) return;
    // // important, only recalculating if the value changes
    if (storedXPosition === xPosition && storedYPosition === yPosition) return;

    // // range from -50 to 50
    const x = percentage(xPosition, width) - 50;
    const y = percentage(yPosition, height) - 50;

    // range from -20 to 80
    const yHigh = percentage(yPosition, height) - 20;
    // range from -80 to 20
    const yLow = percentage(yPosition, height) - 80;

    gsap.to(dom.face, {
      yPercent: yLow / 30,
      xPercent: x / 30,
    });
    gsap.to(dom.eye, {
      yPercent: yHigh / 3,
      xPercent: x / 2,
    });
    gsap.to(dom.innerFace, {
      yPercent: y / 6,
      xPercent: x / 8,
    });
    gsap.to(dom.hairFront, {
      yPercent: yHigh / 15,
      xPercent: x / 22,
    });
    gsap.to(dom.shadow, {
      yPercent: (yLow / 20) * -1,
      xPercent: (x / 20) * -1,
    });
    gsap.to(dom.ear, {
      yPercent: (y / 1.5) * -1,
      xPercent: (x / 10) * -1,
    });
    gsap.to([dom.eyebrowLeft, dom.eyebrowRight], {
      yPercent: y * 2.5,
    });

    setStoredXPosition(xPosition);
    setStoredYPosition(yPosition);
  }

  function updateWindowSize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    //     // update if browser resizes
    window.addEventListener("resize", updateWindowSize);
    window.addEventListener("mousemove", debouncedUpdateScreenCoords);

    return () => {
      window.removeEventListener("mousemove", updateScreenCoords);
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  useGSAP(
    () => {
      gsap.set(".bg", { transformOrigin: "50% 50%" });
      gsap.set(".ear-right", { transformOrigin: "0% 50%" });
      gsap.set(".ear-left", { transformOrigin: "100% 50%" });
      gsap.set(".me", { opacity: 1 });

      meTl
        .from(
          ".me",
          {
            duration: 1,
            yPercent: 100,
            ease: "elastic.out(0.5, 0.4)",
          },
          0.5
        )
        .from(
          ".head , .hair , .shadow",
          {
            duration: 0.9,
            yPercent: 20,
            ease: "elastic.out(0.58, 0.25)",
          },
          0.6
        )
        .from(
          ".ear-right",
          {
            duration: 1,
            rotate: 40,
            yPercent: 10,
            ease: "elastic.out(0.5, 0.2)",
          },
          0.7
        )
        .from(
          ".ear-left",
          {
            duration: 1,
            rotate: -40,
            yPercent: 10,
            ease: "elastic.out(0.5, 0.2)",
          },
          0.7
        )
        .to(
          ".glasses",
          {
            duration: 1,
            keyframes: [{ yPercent: -10 }, { yPercent: -0 }],
            ease: "elastic.out(0.5, 0.2)",
          },
          0.75
        )
        .from(
          ".eyebrow-right , .eyebrow-left",
          {
            duration: 1,
            yPercent: 300,
            ease: "elastic.out(0.5, 0.2)",
          },
          0.7
        )
        .to(
          ".eye-right , .eye-left",
          {
            duration: 0.01,
            opacity: 1,
          },
          0.85
        )
        .to(
          ".eye-right-2 , .eye-left-2",
          {
            duration: 0.01,
            opacity: 0,
          },
          0.85
        );

      blink
        .to(
          ".eye-right, .eye-left",
          {
            duration: 0.01,
            opacity: 0,
          },
          0
        )
        .to(
          ".eye-right-2, .eye-left-2",
          {
            duration: 0.01,
            opacity: 1,
          },
          0
        )
        .to(
          ".eye-right, .eye-left",
          {
            duration: 0.01,
            opacity: 1,
          },
          0.15
        )
        .to(
          ".eye-right-2 , .eye-left-2",
          {
            duration: 0.01,
            opacity: 0,
          },
          0.15
        );

      dizzy
        .to(
          ".eyes",
          {
            duration: 0.01,
            opacity: 0,
          },
          0
        )
        .to(
          ".dizzy",
          {
            duration: 0.01,
            opacity: 0.3,
          },
          0
        )
        .to(
          ".mouth",
          {
            duration: 0.01,
            opacity: 0,
          },
          0
        )
        .to(
          ".oh",
          {
            duration: 0.01,
            opacity: 0.85,
          },
          0
        )
        .to(
          ".head, .hair-back, .shadow",
          {
            duration: 6,
            rotate: 2,
            transformOrigin: "50% 50%",
            ease: "myWiggle",
          },
          0
        )
        .to(
          ".me",
          {
            duration: 6,
            rotate: -2,
            transformOrigin: "50% 100%",
            ease: "myWiggle",
          },
          0
        )
        .to(
          ".me",
          {
            duration: 4,
            scale: 0.99,
            transformOrigin: "50% 100%",
            ease: "lessWiggle",
          },
          0
        )
        .to(
          ".dizzy-1",
          {
            rotate: -360,
            duration: 1,
            repeat: 5,
            transformOrigin: "50% 50%",
            ease: "none",
          },
          0.01
        )
        .to(
          ".dizzy-2",
          {
            rotate: 360,
            duration: 1,
            repeat: 5,
            transformOrigin: "50% 50%",
            ease: "none",
          },
          0.01
        )
        .to(
          ".eyes",
          {
            duration: 0.01,
            opacity: 1,
          },
          4
        )
        .to(
          ".dizzy",
          {
            duration: 0.01,
            opacity: 0,
          },
          4
        )
        .to(
          ".oh",
          {
            duration: 0.01,
            opacity: 0,
          },
          4
        )
        .to(
          ".mouth",
          {
            duration: 0.01,
            opacity: 1,
          },
          4
        );
    },
    { scope: container }
  );

  return (
    <div {...rest} ref={container}>
      <svg
        viewBox="0 10 211.73 180"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <clipPath id="background-clip">
            <path
              d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-8.82-80.28-33.59-86.29C136.84-6.57 114.13-5.82 88-2.82S34.73 11.45 16.71 48.24C-1.5 66.64-4.88 125.2 39 153.73z"
              fill="none"
            />
          </clipPath>

          <linearGradient
            id="linear-gradient"
            x1="102.94"
            y1="154.47"
            x2="102.94"
            y2="36.93"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff5cc" />
            <stop offset="0.01" stopColor="#faf0c8" />
            <stop offset="0.19" stopColor="#c2b599" />
            <stop offset="0.35" stopColor="#998977" />
            <stop offset="0.47" stopColor="#806f62" />
            <stop offset="0.54" stopColor="#77655a" />
            <stop offset="0.6" stopColor="#77655a" />
            <stop offset="1" stopColor="#77655a" />
          </linearGradient>
        </defs>
        <path
          className="bg"
          d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-10.51-57-35.28-63-50.22 17-76.31 20-60.12-15.88-78.32 2.51S-4.88 125.2 39 153.73z"
          fill="#79C0DB"
        />
        <g clipPath="url(#background-clip)">
          <g className="me" opacity="0">
            <g className="body">
              <rect
                className="shadow"
                x="70.99"
                y="40.26"
                width="69.54"
                height="82.49"
                ry="50.08"
                transform="rotate(180 104.76 88.5)"
                opacity="0.09"
              />

              <path
                className="neck"
                d="M117.26 143.16v-14a9.22 19.22 0 10-24.43 0v14c-15.27 2.84-24.74 9.08-24.74 27.33H139c0-12.24-3.5-24.49-21.74-27.33z"
                fill="#bf9169"
              />
              <path
                className="neck"
                d="M119.26 143.16v-14a9.22 19.22 0 10-29.43 0v14c-15.27 2.84-24.74 9.08-24.74 27.33H139c0-12.24-3.5-24.49-21.74-27.33z"
                fill="#000"
                opacity="0.09"
              />
              <path
                className="top"
                d="M105.61 167c-30.17 0-25.36-40-25.36 15.84h25.35l25-2.14c-.05-55.79 5.17-13.7-24.99-13.7z"
                fill="#fff"
                stroke="#404040"
                strokeWidth=".5"
              />
              <path
                className="shoulder"
                d="M 91.82 142.87 c -22 0.33 -39.37 18.33 -36.37 40h 50.37z"
                fill="#404040"
              />
              <path
                className="shoulder"
                d="M 118.23 142.67 c 21.77 0.33 39.77 18.33 36.77 40.33 h -50 z"
                fill="#404040"
              />
            </g>

            <path
              className="shadow"
              d="M 92.5 122.36 h 25 v 13.64 s -9.5 15.54 -24.5 1 z"
              fill="#000"
              opacity="0.09"
            />
            <g className="head">
              <g className="ear-left ear">
                {/* <path d="M63.52 105.14A8.21 8.21 0 0072 113.2a8.36 8.36 0 008.51-8.1A8.21 8.21 0 0072 97a8.36 8.36 0 00-8.48 8.14z" fill="#bf9169" /> */}
                <path
                  d="M 71 107 A 8.21 8.21 0 0 0 76 113 a 8.36 8.36 0 0 0 13 -8 A 8.21 8.21 0 0 0 76 97 a 8.36 8.36 0 0 0 -4 3 z C 71.3333 104.6667 72 106 72 100 C 71.6667 102.3333 69 104 71 107"
                  fill="#bf9169"
                />

                <path
                  d="M68.54 104.48a17 17 0 014.14.41c1.07.31 1.94 1 3 1.31a.39.39 0 00.43-.57c-1.15-2.38-5.49-1.86-4.58-1.67a.26.26 0 000 .52z"
                  fill="#DBE8E4"
                />
              </g>
              <g className="ear-right ear">
                <path
                  d="M 140 105 c -1 4 -4 8 -8.37 8.06 a 8.35 8.35 0 0 1 -8.51 -8.1 a 8.21 8.21 0 0 1 8.42 -8.06 q 5.46 1.1 7.46 5.1 z"
                  fill="#bf9169"
                />
                <path
                  d="M139.6 104c-2.1-.19-6.43-.72-7.59 1.67a.0.39 0 00.44.57c1.07-.26 1.92-1 3-1.31a17.51 17.51 0 014.15-.41.26.26 0 000-.52z"
                  fill="#DBE8E4"
                />
              </g>
              <g className="face">
                <rect
                  x="76.99"
                  y="47.26"
                  width="55.54"
                  height="84.49"
                  ry="36.08"
                  transform="rotate(180 104.76 88.5)"
                  fill="#bf9169"
                />
                <g className="inner-face">
                  <path
                    className="eyebrow-right"
                    d="M120.73 79a9 9 0 00-4-1.22 9.8 9.8 0 00-4.19.87"
                    fill="none"
                    stroke="#DBE8E4"
                    strokeWidth="1.04"
                  />
                  <path
                    className="eyebrow-left"
                    d="M97.12 79.41a9.53 9.53 0 00-4-1.11 10.58 10.58 0 00-4.2.76"
                    fill="none"
                    stroke="#DBE8E4"
                    strokeWidth="1.04"
                  />
                  <path
                    className="mouth"
                    d="M97 107.52s7.06 4.62 14 1.59"
                    fill="none"
                    stroke="#DBE8E4"
                    strokeWidth="1.04"
                  />
                  <path
                    className="oh"
                    opacity="0"
                    d="M105.56,117.06c4-.14,5-2.89,4.7-5.64s-1.88-6.7-4.84-6.62-4.73,4.36-4.9,6.72S101.57,117.19,105.56,117.06Z"
                    fill="#262528"
                  />
                  <g className="eyes">
                    <path
                      className="eye-left eye"
                      d="M89.48 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z"
                      fill="#2b343b"
                    />
                    <path
                      className="eye-right eye"
                      d="M113.67 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z"
                      fill="#2b343b"
                    />
                    <path
                      className="eye-right-2 eye"
                      d="M114.11 88a5.72 5.72 0 002.48.72 6.46 6.46 0 002.59-.45"
                      opacity="0"
                      fill="none"
                      stroke="#282828"
                      strokeWidth="1.04"
                    />
                    <path
                      className="eye-left-2 eye"
                      d="M89.85 88a5.77 5.77 0 002.56.3 6.48 6.48 0 002.49-.87"
                      fill="none"
                      opacity="0"
                      stroke="#282828"
                      strokeWidth="1.04"
                    />
                  </g>
                  <path
                    className="dizzy dizzy-1"
                    opacity="0"
                    d="M113.61,87.6c.54-2.66,2.66-3.84,4.63-3.37A3.3,3.3,0,0,1,117,90.71a2.53,2.53,0,0,1-2-3,2.48,2.48,0,0,1,2.73-1.92A1.71,1.71,0,0,1,119.32,88a1.59,1.59,0,0,1-1.75,1.34c-.79-.1-1.41-.59-1-1.42s1-.72,1.22-.24"
                    fill="none"
                    stroke="#000"
                    strokeWidth="0.75"
                  />
                  <path
                    className="dizzy dizzy-2"
                    opacity="0"
                    d="M96.15,87.27c-.54-2.66-2.66-3.84-4.63-3.37s-2.89,1.9-2.46,4a3.11,3.11,0,0,0,3.68,2.45,2.53,2.53,0,0,0,2-3A2.49,2.49,0,0,0,92,85.49a1.71,1.71,0,0,0-1.57,2.13A1.57,1.57,0,0,0,92.19,89c.79-.11,1.41-.6,1-1.43s-1-.72-1.22-.23"
                    fill="none"
                    stroke="#000"
                    strokeWidth="0.75"
                  />
                  <path
                    className="nose"
                    d="M102.39 98.13s3.09 1.55 5.78 0"
                    fill="none"
                    stroke="#e0d5c1"
                  />
                  <path
                    className="glasses"
                    d="M133.54 81.76c-4.7-1.42-15.29-2.42-19.83-.45-5.82 2.17-3.18 1.57-8.55 1.17-5.36.4-2.74 1-8.55-1.18-7.3-2.55-15.58-.24-22.25.72v2.75c2.46.24 1.26 6.78 3.06 10.32 2.13 7.23 12.69 9.55 18.19 5.49 3.9-2 7.08-10.32 7.21-12.86 0-1.64 4.15-2.57 4.61.24.11 2.53 3.42 10.69 7.28 12.62 5.5 4 16 1.74 18.17-5.49 1.8-3.54 1.69-9.92 2.88-10.32s.74-2.67 0-2.75-1.02-.1-2.22-.26zM97.25 97.49C90.94 104.81 79 101.2 78 92.3c-.7-2.62-1-7.3 1.27-9.12s6.88-1.87 9.23-2c11.14-.26 16.62 5.6 8.75 16.31zm35.12-5.19c-3.71 17.2-27.26 7.42-22.09-7.36 1.87-3.11 9.09-3.84 11.55-3.73 8.07-.04 12.7 1.79 10.54 11.09z"
                    fill="#c6c6c6"
                    opacity=".48"
                  />
                </g>
                <path
                  className="hair-front"
                  d="M 117.16 63.605 c -0.585 -0.01 -1.165 -0.045 -1.75 -0.105 c -1.11 -0.115 -2.085 -0.895 -3.085 -0.925 c -1.8 -0.055 -3.505 0.715 -5.575 0.795 c -1.37 0.065 -2.635 -0.305 -3.77 -1.265 c -5.92 -0.955 -10.8 -0.945 -14.665 0 c -0.57 -3.035 -1.97 -5.265 -3.405 -5.915 c 0.865 2.185 1.505 4.145 1.175 5.855 c -1.725 -0.435 -3.23 0.15 -4.36 2.48 c -1.89 0.785 -2.305 6.24 -2.285 13.05 c 0.48 0.92 0.76 1.97 0.875 3.13 c 0.135 1.335 0.05 2.815 -0.205 4.405 c -0.79 0.565 -0.875 2.85 -1.31 4.28 h -1.515 l -1.21 -11.005 L 74.05 73.345 C 71.55 68.515 71 64.42 72.84 61.24 c -1.15 -0.92 -1.78 -1.965 -1.835 -3.145 c -0.11 -2.525 2.205 -4.81 4.14 -6.135 c 1.16 -0.795 3.655 -1.08 3.48 -2.29 c -0.99 0.1 -1.805 -0.06 -2.35 -0.62 c -2.62 -2.685 2.52 -3.83 4.39 -4.025 c 3.315 -0.345 6.905 0.485 11.695 0.485 c -1.98 -1.46 -4.875 -2.25 -7.385 -2.18 c 1.94 -1.925 4.94 -3.345 8.05 -4.14 c -0.635 -0.35 -2.535 -0.5 -4.965 -0.185 c 3.88 -2.355 6.575 -1.525 12.08 0.315 L 96.79 35 c 1.85 0.83 3.58 1.52 5.205 2.085 c 6.17 2.15 13.335 1.295 19.065 2.775 c 9.515 2.455 14.61 15.56 4.225 20.9 C 122.715 62.085 120.035 62.65 117.16 62.605 L 117.16 62.605 z M 125.155 63.725 c -0.295 -0.35 -0.395 -0.715 -0.305 -0.905 c 2.15 -4.82 8.15 -1.82 6.985 3.005 c 2.165 3.175 -0.005 3.835 1.165 6.175 c -0.88 2.665 -0 5 0 7 c 0 2 -0.49 4.29 -1 5 c -2.625 -0.73 -2.625 -3.73 -2.06 -5 c -0.025 -3.485 0.135 -6.125 -1.94 -8 c -0.35 -1.325 -0.8 -2.21 -1 -3 C 126.015 66.32 125 65 125.155 63.725 L 125.155 63.725 z"
                  fill="#77655a"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default styled(Avatar)`
  max-width: 420px;
  max-height: 350px;
  width: 100%;
  height: 100%;
  svg {
    flex-shrink: 0;
  }
`;
