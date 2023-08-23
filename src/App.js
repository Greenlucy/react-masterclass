import styled, { keyframes } from "styled-components";

// 확장 : styled(확장하려는 컴포넌트명) `[CSS 코드] `

// const Input = styled.input.attrs({ required: true, minLength: 10 })`
//   background-color: tomato;
// `;

// 중앙에 Box 두기 위함.
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

// 사용할 컴포넌트보다 위에 선언되어야 함.
const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius:0px;
  }
  50%{
    border-radius:100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 25px;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <Box>
        <Emoji>😊</Emoji>
      </Box>
      <Emoji>😎</Emoji>
    </Wrapper>
  );
}

export default App;
