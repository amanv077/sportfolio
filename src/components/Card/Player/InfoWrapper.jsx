import CardInfoBackground from "../../../assets/images/card-info-background.svg";
import BottomLogo from "./BottomLogo";

function PlayerInfoWrapper({
  firstName,
  lastName,
  number = 7,
  age = 36,
  color = "black",
  isDark,
}) {
  return (
    <div
      className={`absolute bottom-0 w-full h-1/3 ${
        isDark ? "text-black" : "text-white"
      }`}
    >
      <h3
        className="text-center mt-6"
        style={{
          background: `linear-gradient(26deg, ${
            !isDark ? "#FFF" : "rgb(13,13,13)"
          } 1.03%, rgba(255, 255, 255, 0) 18.42%,  ${
            !isDark ? "#FFF" : "rgb(13,13,13)"
          } 35.8%), ${!isDark ? "#FFF" : "rgb(13,13,13)"} `,
          WebkitBackgroudClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          backgroundBlendMode: "plus-lighter, normal",
          textShadow: "0px 6.78261px 11.3043px rgba(0, 0, 0, 0.3)",
          lineHeight: "1.05",
        }}
      >
        <span className="text-3xl font-extrabold uppercase">{firstName}</span>
        <br />
        <span className="text-3xl font-extrabold uppercase">{lastName}</span>
      </h3>

      {/* Player Info (Position, Number, Age) */}
      <div
        className="flex justify-between uppercase items-center w-10/12 mx-auto mt-2"
        style={{ fontSize: "small", lineHeight: "1.5" }}
      >
        <span className="flex-1 text-center font-semibold">Forward</span>
        <span className="flex-1 text-center font-semibold text-xl">
          #{number}
        </span>
        <span className="flex-1 text-center font-semibold">Age {age}</span>
      </div>

      <BottomLogo color={color} />
      <img
        className="absolute bottom-0 pointer-events-none"
        src={CardInfoBackground}
        alt="Card Bottom Label"
      />
    </div>
  );
}

export default PlayerInfoWrapper;

// const path =
//   "M-7.43478 47.2393C-7.43478 32.3269 2.4656 19.2273 16.8118 15.1574L62.5944 2.16943C68.5445 0.48146 74.8468 0.481463 80.7969 2.16943L141.982 19.5268C148.133 21.272 154.649 21.272 160.801 19.5268L221.986 2.16943C227.936 0.48146 234.238 0.481463 240.188 2.16943L285.971 15.1574C300.317 19.2273 310.217 32.3269 310.217 47.2393V148.217C310.217 165.386 296.299 179.304 279.13 179.304H23.6522C6.48335 179.304 -7.43478 165.386 -7.43478 148.217V47.2393Z";

// export function PlayerInfoWrapperCustom() {
//   return (
//     <div className="absolute bottom-0 w-full">
//       <div className="absolute w-full aspect-[311/158] overflow-hidden top-10">
//         <svg
//           className="absolute w-full h-full"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 311 158"
//           preserveAspectRatio="none"
//         >
//           <defs>
//             <clipPath id="custom-clip-path" clipPathUnits="objectBoundingBox">
//               {/* <path d={path} /> */}
//               <path d="M0.0239,0.298 C0.0239,0.207 0.0388,0.123 0.054,0.0971 L0.201,0.0135 C0.2202,0.0002 0.239,0.0002 0.2581,0.0135 L0.456,0.1235 C0.477,0.134 0.496,0.134 0.517,0.1235 L0.713,0.0135 C0.7322,0.0002 0.751,0.0002 0.7701,0.0135 L0.916,0.0971 C0.931,0.123 0.946,0.207 0.946,0.298 V0.933 C0.946,0.939 0.933,0.944 0.917,0.944 H0.0766 C0.061,0.944 0.048,0.939 0.048,0.933 V0.298 Z" />
//             </clipPath>

//             <pattern
//               id="image-pattern"
//               patternUnits="objectBoundingBox"
//               width="1"
//               height="1"
//             >
//               <image href={pngImage} x="0" y="0" width="100%" height="160%" />
//             </pattern>
//           </defs>

//           <rect
//             x="0"
//             y="0"
//             width="311"
//             height="158"
//             clipPath="url(#custom-clip-path)"
//             fill="url(#image-pattern)"
//           />
//         </svg>
//       </div>
//       <svg
//         width="311"
//         height="180"
//         viewBox="0 0 311 180"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{ width: "100%" }}
//       >
//         <path
//           d={path}
//           fill="url(#paint0_linear_6_2456)"
//           style={{ mixBlendMode: "darken" }}
//         />
//         <path
//           d={path}
//           stroke="url(#paint1_linear_6_2456)"
//           strokeWidth="1.13043"
//         />
//         <path
//           d={path}
//           stroke="url(#paint2_linear_6_2456)"
//           strokeWidth="1.13043"
//         />
//         <defs>
//           <linearGradient
//             id="paint0_linear_6_2456"
//             x1="151.391"
//             y1="9.73913"
//             x2="151.391"
//             y2="138.043"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopOpacity="0.2" />
//             <stop offset="1" stopColor="white" stopOpacity="0" />
//           </linearGradient>
//           <linearGradient
//             id="paint1_linear_6_2456"
//             x1="151.391"
//             y1="0.130438"
//             x2="151.391"
//             y2="138.043"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopOpacity="0.2" />
//             <stop offset="1" stopColor="white" stopOpacity="0.1" />
//           </linearGradient>
//           <linearGradient
//             id="paint2_linear_6_2456"
//             x1="151.391"
//             y1="0.130438"
//             x2="151.391"
//             y2="138.043"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopOpacity="0.2" />
//             <stop offset="1" stopColor="white" stopOpacity="0.1" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// }
