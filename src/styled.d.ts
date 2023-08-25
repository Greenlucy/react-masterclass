// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {  
    // 테마가 어떻게 보일지 설명할 부분 (shape, 테마의 속성 등..)
	textColor: string;
    bgColor: string;
    btnColor:string;
  }
}