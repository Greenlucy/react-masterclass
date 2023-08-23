import styled, { keyframes } from "styled-components";

// 확장 : styled(확장하려는 컴포넌트명) `[CSS 코드] `

// const Input = styled.input.attrs({ required: true, minLength: 10 })`
//   background-color: tomato;
// `;

const Wrapper = styled.div`
  display: flex;
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

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 40px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😊</span>
      </Box>
    </Wrapper>
  );
}

export default App;
