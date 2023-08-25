import { useState } from "react";
import styled from "styled-components";
// 확장 : styled(확장하려는 컴포넌트명) `[CSS 코드] `

function App() {
  const Container = styled.div`
    background-color: ${(props)=> props.theme.bgColor};
  `;
  const H1 = styled.h1`
    color:${(props)=> props.theme.textColor};
  `;

  return (
    <div>
      <Container>
        <H1>protected</H1>
      </Container>
    </div>
  );
}

export default App;
