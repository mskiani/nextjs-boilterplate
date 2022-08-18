import styled from "styled-components";
import Modal from "react-modal";

import { device } from "styled/Breakpoint";
interface StyledProps {
  padding?: string;
  active?: boolean;
  bg?: string;
  height?: string;
  width?: string;
  center?: boolean;
  disabled?: boolean;
  color?: string;
  size?: string;

  gap?: string;
  gapml?: string;
  margin?: string;
  marginML?: string;
  paddingML?: string;
  justifyContent?: string;
  direction?: string;
  alignItems?: string;
  title?: string;
  widthml?: string;
  heightml?: string;
  bgColor?: string;
  borderRadius?: string;
  marginml?: string;
}
const MyModal = styled(Modal)`
  background: var(--whiteFont);
  height: ${({ height }: StyledProps) => height && height};
  position: absolute;
  inset: 40px;
  border: 1px solid rgb(204, 204, 204);
`;
const CustomModal = {
  content: {
    width: "400px",
    margin: "100px auto 0",
    borderRadius: "20px",
    display: "flex",
    padding: "1.5rem 2rem",
    flexDirection: "column",
    zIndex: "99",
  },
  overlay: { background: "#00000099" },
};
const InquiryModal = {
  content: {
    maxWidth: "400px",
    minWidth: "300px",
    margin: "100px auto 0",

    borderRadius: "20px",
    display: "flex",
    padding: "1.5rem 2rem",
    flexDirection: "column",
    zIndex: "99",
    height: 500,
    justifyContent: "center",
  },
  overlay: { background: "#00000099" },
};
const AnalyzeResult = {
  content: {
    width: "457px",
    margin: "auto",
    borderRadius: "24px",
    height: "414px",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
  },
  overlay: { background: "#00000099" },
};
const CustomModal3 = {
  content: {
    width: "450px",
    height: "450px",
    margin: "100px auto 0",
    borderRadius: "20px",
    display: "flex",
    padding: "1.5rem 2rem",
    flexDirection: "column",
  },
  overlay: { background: "#00000099" },
};
const CustomModal7 = {
  content: {
    width: "400px",
    height: "440px",
    margin: "0 auto",
    borderRadius: "20px",
    display: "flex",
    padding: "1.5rem 2rem",
    flexDirection: "column",
  },
  overlay: { background: "#00000099" },
};

const CustomModal2 = {
  content: {
    width: "700px",
    maxHeight: "550px",
    height: "max-content",
    minHeight: "400px",
    margin: "100px auto 0",
    borderRadius: "20px",
    display: "flex",
    padding: "1.5rem 2rem",
    flexDirection: "column",
  },
  overlay: { background: "#00000099" },
};

const CustomModal4 = {
  content: {
    width: "845px",
    height: "fit-content",
    maxHeight: "700px",
    margin: "100px  auto 0",
    // borderRadius: "3px",
    display: "flex",

    flexDirection: "column",
    zIndex: "99",
    borderRadius: "24px",
  },
  overlay: { background: "#00000099" },
};
export const CustomModal5 = {
  content: {
    width: "845px",
    maxWidth: "90%",
    height: "fit-content",
    maxHeight: "700px",
    margin: "100px auto 0",
    borderRadius: "24px",
    display: "flex",
    padding: "0",
    flexDirection: "column",
    overflow: "auto",
    border: "none",
  },
  overlay: { background: "#00000099" },
};

const CustomModal6 = {
  content: {
    width: "831px",
    height: "350px",
    margin: "100px auto 0",
    borderRadius: "3px",
    display: "flex",
    padding: "1.5rem 2rem",
    flexDirection: "column",
  },
  overlay: { background: "#00000099" },
};
const CustomModal9 = {
  content: {
    width: "400px",
    margin: "0 auto ",
    borderRadius: "20px",
    display: "flex",
    padding: "1.5rem 2rem",
    flexDirection: "column",
    zIndex: "99",
    height: "560px",
  },
  overlay: { background: "#00000099" },
};
const CustomModal10 = {
  content: {
    width: "400px",
    margin: "auto",
    borderRadius: "20px",
    display: "flex",
    padding: "1.5rem 2rem",
    flexDirection: "column",
    zIndex: "99",
    height: "600px",
  },
  overlay: { background: "#00000099" },
};
const Title1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
`;
const Title2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  height: 76px;
  padding: 0px 16px 0px 28px;
  background-color: #22b3d0;
  align-items: center;
`;
const CloseIcon = styled.img`
  margin-left: auto;
  cursor: pointer;
  height: 48px;
  width: 48px;
  min-width: 48px;
  border-radius: 50%;
  box-shadow: 8px 15px 27px #e3e6ec;
`;
const CloseIcon2 = styled.img`
  margin-left: auto;
  cursor: pointer;
  height: 48px;
  width: 48px;
  min-width: 48px;
  border-radius: 50%;
  background-color: white;
`;
const Heading = styled.p`
  font-weight: 700;
  font-size: ${({ size }: StyledProps) => (size ? size : "17px")};
  line-height: 28px;

  letter-spacing: -0.4px;

  color: ${({ color }: StyledProps) => (color ? color : "var(--grey01)")};

  margin: ${({ margin }: StyledProps) => (margin ? margin : "0px")};
  padding: ${({ padding }: StyledProps) => (padding ? padding : "0px")};

  cursor: pointer;
`;

const Steps = styled.p`
  font-weight: 700;
  font-size: ${({ size }: StyledProps) => (size ? size : "17px")};
  line-height: 28px;

  letter-spacing: -0.4px;

  color: ${({ color }: StyledProps) => (color ? color : "var(--grey01)")};

  margin: ${({ margin }: StyledProps) => (margin ? margin : "0px")};
  padding: ${({ padding }: StyledProps) => (padding ? padding : "0px")};

  cursor: pointer;
`;

const DownloadButton = styled.div`
  display: flex;
  flex-direction: row;
  padding: 17px 90px 17px 90px;

  background-color: var(--baseblue);
  border-radius: 12px;
  margin: 36px 0px 0px 0px;
  justify-content: center;
  align-items: center;
  @media ${device.mobileL} {
    width: 90%;
  }
`;

const Container = styled.div<{ paddingML?: string }>`
  display: flex;
  flex-direction: ${({ direction }: StyledProps) =>
    direction ? direction : "column"};
  width: 100%;
  overflow: hidden;
  gap: ${({ gap }: StyledProps) => (gap ? gap : "0px")};

  padding: ${({ padding }: StyledProps) => (padding ? padding : "0px")};
  margin: ${({ margin }: StyledProps) => (margin ? margin : "0px")};
  justify-content: ${({ justifyContent }: StyledProps) =>
    justifyContent ? justifyContent : ""};
  align-items: ${({ alignItems }: StyledProps) =>
    alignItems ? alignItems : ""};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0px")};

  @media ${device.mobileL} {
    flex-direction: column;
  }
  @media ${device.mobileL} {
    width: 100%;
    overflow: hidden;
    display: flex;
    margin: ${({ marginML }) => (marginML ? marginML : "0px")};
    padding: ${({ paddingML }) => (paddingML ? paddingML : "0px")};
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: ${({ direction }: StyledProps) =>
    direction ? direction : "column"};
  width: 100%;
  overflow: hidden;
  gap: ${({ gap }: StyledProps) => (gap ? gap : "0px")};

  padding: ${({ padding }: StyledProps) => (padding ? padding : "0px")};
  margin: ${({ margin }: StyledProps) => (margin ? margin : "0px")};
  justify-content: ${({ justifyContent }: StyledProps) =>
    justifyContent ? justifyContent : ""};
  align-items: ${({ alignItems }: StyledProps) =>
    alignItems ? alignItems : ""};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0px")};

  @media ${device.mobileL} {
    flex-direction: column;
  }
  @media ${device.mobileL} {
    overflow: hidden;
    flex-direction: row;
    width: 80%;
    display: flex;
    justify-content: center;
    margin: ${({ marginML }) => (marginML ? marginML : "")};
    padding: ${({ paddingML }) => (paddingML ? paddingML : "")};
  }
`;
const Container7 = styled.div`
  display: flex;
  flex-direction: ${({ direction }: StyledProps) =>
    direction ? direction : "column"};
  width: 100%;
  overflow: hidden;
  gap: ${({ gap }: StyledProps) => (gap ? gap : "0px")};

  padding: ${({ padding }: StyledProps) => (padding ? padding : "0px")};
  margin: ${({ margin }: StyledProps) => (margin ? margin : "0px")};
  justify-content: ${({ justifyContent }: StyledProps) =>
    justifyContent ? justifyContent : ""};
  align-items: ${({ alignItems }: StyledProps) =>
    alignItems ? alignItems : ""};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0px")};

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    display: flex;
    gap: ${({ gapml }) => (gapml ? gapml : "0px")};
  }
`;
const Container6 = styled.div`
  display: flex;
  flex-direction: ${({ direction }: StyledProps) =>
    direction ? direction : "column"};
  width: 100%;
  overflow: hidden;
  gap: ${({ gap }: StyledProps) => (gap ? gap : "0px")};

  padding: ${({ padding }: StyledProps) => (padding ? padding : "0px")};
  margin: ${({ margin }: StyledProps) => (margin ? margin : "0px")};
  justify-content: ${({ justifyContent }: StyledProps) =>
    justifyContent ? justifyContent : ""};
  align-items: ${({ alignItems }: StyledProps) =>
    alignItems ? alignItems : ""};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0px")};

  @media ${device.mobileL} {
    flex-direction: column;
  }
  @media ${device.mobileL} {
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    over-flow: hidden;
    display: flex;
    margin: ${({ marginML }: StyledProps) => (marginML ? marginML : "0px")};
  }
`;
const Container4 = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  margin: 0 1rem 0 0;
`;
const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Container5 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Form = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: ${({ center }: StyledProps) => (center ? "" : "center")};
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
`;
const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
`;
const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */
  padding: ${({ padding }: StyledProps) => (padding ? padding : "0 1rem 0 0")};
  letter-spacing: -0.4px;
  color: var(--blackFont);
`;
const Errors = styled.div`
  color: tomato;
  font-size: 15px;
`;
const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 14px;
  outline: none;
  border-radius: 10px;
  border: 1px solid var(--grey07);
  margin: 10px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: var(--grey04);
  box-sizing: border-box;
  ::placeholder {
    color: var(--grey05);
    word-spacing: 2px;
  }
  &:hover {
    border: 1px solid var(--baseblue);
  }
`;
const Input = styled.input`
  padding: 14px;
  outline: none;
  border-radius: 10px;
  border: 1px solid var(--grey07);
  margin: 10px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: var(--grey04);
  ::placeholder {
    color: var(--grey05);
    word-spacing: 2px;
  }
  &:hover {
    border: 1px solid var(--baseblue);
  }
`;
const Input2 = styled.input`
  border: none;
  outline: none;
  color: var(--grey04);
  width: 100%;
  ::placeholder {
    color: var(--grey05);
    word-spacing: 2px;
  }
`;
const Button = styled.button<{
  bg?: string;
  color: string;
  disabled: boolean;
}>`
  background: ${({ bg, disabled }: StyledProps) =>
    bg ? bg : "var(--baseblue);"};
  color: ${({ bg }: StyledProps) =>
    bg ? "var(--blackFont);" : "var(--whiteFont);"};
  border-radius: 12px;
  border: ${({ bg, disabled }: StyledProps) =>
    disabled
      ? "none"
      : bg
      ? "1px solid var(--grey06);"
      : "1px solid var(--baseblue);"};
  outline: none;
  width: 196px;
  height: 52px;
  margin: 0 auto;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  opacity: ${({ disabled }: StyledProps) => disabled && "0.5"};
`;

const Button2 = styled.button`
  background: ${({ bg, disabled }: StyledProps) =>
    bg ? bg : "var(--baseblue);"};
  color: ${({ color }: StyledProps) => (color ? color : "var(--blackFont);")};
  border-radius: 12px;
  border: ${({ bg, disabled }: StyledProps) =>
    disabled
      ? "none"
      : bg
      ? "1px solid var(--grey06);"
      : "1px solid var(--baseblue);"};
  outline: none;
  width: 196px;
  height: 52px;
  margin: 0 auto;
  cursor: pointer;
  font-weight: 700;
  opacity: ${({ disabled }: StyledProps) => disabled && "0.5"};
`;
const ImageCenter = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 297.5px;
  height: 297.5px;
`;

const Image2 = styled.img`
  width: ${({ width }: StyledProps) => (width ? width : "")};
  height: ${({ height }: StyledProps) => (height ? height : "")};
  background-color: ${({ bgColor }: StyledProps) => (bgColor ? bgColor : "")};

  box-shadow: 0px 8.92px 51.29px rgba(196, 196, 196, 0.15);
  padding: ${({ padding }: StyledProps) => (padding ? padding : "0")};
  border-radius: ${({ borderRadius }: StyledProps) =>
    borderRadius ? borderRadius : "50%"};
  margin: ${({ margin }: StyledProps) => (margin ? margin : "0px")};
  object-fit: contain;
  @media ${device.mobileL} {
    width: ${({ widthml }: StyledProps) => (widthml ? widthml : "")};
    height: ${({ heightml }: StyledProps) => (heightml ? heightml : "")};
    margin: ${({ marginml }) => (marginml ? marginml : "0px")};
  }
`;

const Image3 = styled.img`
  width: ${({ width }: StyledProps) => (width ? width : "")};
  height: ${({ height }: StyledProps) => (height ? height : "")};
  background-color: ${({ bgColor }: StyledProps) => (bgColor ? bgColor : "")};

  box-shadow: 0px 4px 45px #e3e6ec;
  padding: ${({ padding }: StyledProps) => (padding ? padding : "")};
  border-radius: ${({ borderRadius }: StyledProps) =>
    borderRadius ? borderRadius : "50%"};

  @media ${device.mobileL} {
    width: ${({ widthml }: StyledProps) => (widthml ? widthml : "")};
    height: ${({ heightml }: StyledProps) => (heightml ? heightml : "")};
    transform: rotate(90deg);
    margin: 30px 0px 30px 0px;
  }
`;

const Icon = styled.img`
  width: 20.5px;
  height: 20.5px;
  /* title: ${({ title }: StyledProps) => (title ? title : "")}; */
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Bar = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid var(--grey06);

  @media ${device.mobileL} {
    margin-top: 66px;
  }
`;
const BoxIput = styled.input`
  width: 44px;
  height: 44px;
  padding: 10px;
  border-radius: 14px;
  border: 1px solid var(--grey07);
  outline: none;
  &:hover {
    border: 2px solid var(--baseblue);
  }
`;
const TableContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const TableHeader = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--grey08);
  border-radius: 10px;
`;
const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const TableRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid var(--grey07);
`;
const HeaderCol = styled.p`
  padding-left: ${({ padding }: StyledProps) => padding && padding};
  padding-block: 15px;
  margin: 0;
  min-width: 50px;
`;
const Paragraph = styled.div`
  overflow: hidden;
  width: auto;
  padding: 0px;
  padding-block: 15px;
  margin: 0px 30px 0px 35px;
  font-size: 15px;
  @media ${device.mobileL} {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    text-align: justify;
    word-wrap: break-word;
    font-size: 15px;
  }
`;
const Col = styled.p`
  text-align: center;
  margin: 5px 0;
  min-width: 50px;
`;
const ApprovalContainer = styled.div`
  padding: 6px 10px;
  gap: 10px;

  width: 44px;
  height: 30px;
  color: #27ae60;
  background: rgba(39, 174, 96, 0.1);
  border-radius: 7px;
`;
const ImageCard = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border: ${({ active }: StyledProps) =>
    active ? "2px solid var(--baseblue);" : "1px solid var(--grey07);"};
  border-radius: 32px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  box-sizing: border-box;
  &:hover {
    border: 2px solid var(--baseblue);
  }
`;
const LeftCard = styled.img`
  padding-left: 0.5rem;
`;
const LoginPopBox = styled.div`
  border-radius: 3px;
  box-sizing: border-box;
  width: 100%;
  /* height: 100%; */
  padding: 20px 0px 27px 10px;

  font-weight: 600;
`;
const Menu = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
`;
const RecoveryDetails = styled.div`
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  margin: 1rem 0;
  align-items: center;
`;
const InputRecovery = styled.input`
  border: 0.5px solid var(--grey05);
  border-radius: 3px;
  padding: 0.4rem 1rem;
  outline: none;
  color: var(--grey03);
  width: ${({ width }: StyledProps) => (width ? width : "75%")};
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--grey05);
  white-space: pre-line;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 64px 38px 38px;
  gap: 10px;

  width: 480px;
  height: auto;

  background: var(--whiteFont);

  /* Grey//07 */
  border: 1px solid var(--grey07);
  box-shadow: 0px 6px 196px rgba(160, 157, 157, 0.07),
    0px 2.1901px 71.5432px rgba(160, 157, 157, 0.0482987),
    0px 1.06325px 34.7329px rgba(160, 157, 157, 0.0389404),
    0px 0.521226px 17.0267px rgba(160, 157, 157, 0.0310596),
    0px 0.206094px 6.73239px rgba(160, 157, 157, 0.0217013);
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export {
  InputRecovery,
  Row,
  Menu,
  CustomModal3,
  LeftCard,
  Form,
  CustomModal,
  InquiryModal,
  Image3,
  Container6,
  Container7,
  CustomModal7,
  Title1,
  DownloadButton,
  Heading,
  Title2,
  Bar,
  CloseIcon,
  Input,
  Errors,
  Label,
  Button,
  Container,
  Container2,
  ImageCenter,
  Image,
  OuterContainer,
  Data,
  BoxIput,
  CustomModal6,
  CloseIcon2,
  CustomModal2,
  TableHeader,
  TableContainer,
  Info,
  Container4,
  Container5,
  TableRow,
  TableBody,
  Col,
  HeaderCol,
  InputWrapper,
  ApprovalContainer,
  Paragraph,
  ImageCard,
  Container3,
  MyModal,
  Input2,
  LoginPopBox,
  AnalyzeResult,
  CustomModal4,
  RecoveryDetails,
  Text,
  Button2,
  Icon,
  Image2,
  CustomModal9,
  CustomModal10,
};
