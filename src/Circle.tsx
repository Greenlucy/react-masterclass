import styled from "styled-components";

interface ContainerProps {
    bgColor: string
}

// 사각형을 만드는 방법 : width, height 설정
// 사각형을 원으로 만드는 방법 : border-radius : width의 절반주기
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
`;

// TypeScript에게 object shape을 설명해줌. 
interface CircleProps {
    bgColor1: string;
  }

// 1. CircleProps는 Component Circle의 props
function Circle({bgColor1}: CircleProps){
    // 2. ContainerProps는 styled Component인 Container의 props
    return <Container bgColor={bgColor1}/>
}

export default Circle;