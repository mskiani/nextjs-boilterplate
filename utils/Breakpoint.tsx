/**
 * This js contains the breakpoint variables
 */
const size = {
  mobileS: "320px",
  mobileM: "356px",
  mobileL: "565px",
  tablet: "768px",
  laptop: "1200px",
  laptopM: "1350px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};

//Usage Example
// @media  ${device.laptop} {
//     max-width: 800px;
// }
