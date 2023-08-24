import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

// 확장 : styled(확장하려는 컴포넌트명) `[CSS 코드] `

// const Input = styled.input.attrs({ required: true, minLength: 10 })`
//   background-color: tomato;
// `;


function App() {
  return (
    // 3. Circle을 부르는 것이므로, CirclProps를 사용해야 함. 
    <div>
      <Circle bgColor1="teal" />
      <Circle bgColor1="tomato" />
    </div>
  );
}

export default App;
