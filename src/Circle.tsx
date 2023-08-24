import styled from "styled-components";

// ContainerProps랑 CircleProps가 동일한 object 구성의 interface 이므로 같이 써줘도 됨. 
interface ContainerProps {
    bgColor: string,
    bdColor: string, 
}

// * styled Component
// 사각형을 만드는 방법 : width, height 설정
// 사각형을 원으로 만드는 방법 : border-radius : width의 절반주기
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${props => props.bdColor}
`;

// TypeScript에게 object shape을 설명해줌. 
interface CircleProps {
    bgColor: string;
    bdColor?: string;
    text?: string;
}

// 1. CircleProps는 Component Circle의 props
function Circle({bgColor, bdColor, text = "default text"}: CircleProps){
    // 2. ContainerProps는 styled Component인 Container의 props
    return (
        <Container bgColor={bgColor} bdColor={bdColor?? bgColor}>
            {text}
        </Container>
    )
}

export default Circle;