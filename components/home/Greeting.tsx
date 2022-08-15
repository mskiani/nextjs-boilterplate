import styled from "styled-components";
interface Props {
  message: string;
}

function Greeting({ message }: Props) {
  return (
    <MainMessage>
      {message}
      <img src={"lol.png"} width="30px" height="30px" />
    </MainMessage>
  );
}

const MainMessage = styled.p`
  color: blue;
  font-size: 20px;
`;
export default Greeting;
