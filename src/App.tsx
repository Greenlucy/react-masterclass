import { useState } from "react";
// 확장 : styled(확장하려는 컴포넌트명) `[CSS 코드] `

function App() {
  const [value, setValue] = useState(""); // protection
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // event 오픈
    const {
      // currentTarget의 value를 얻어오기
      currentTarget: {value},
    } = event;
    setValue(value);


    // ReactJS TypeScript 사람들은 element로 currentTarget 사용을 택함. event.target.value 랑 똑같음. 
    console.log(event.currentTarget.value);
  };

  // Q1. 이 이벤트는 뭐지? A1. 이 이벤트는 <form> 으로부터 왔지. 
  // Q2. 어떤 element가 이 이벤트를 발생시키지? A2. HTMLFormElement
  // onSubmit 이벤트를 만들고 발생시킬 녀석을 찾으면 됨. 
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // TypeScript에게 이 event가 어떤 타입인지 알려줬기 때문에 event. 으로 다양한 자동완성 사용가능
    event.preventDefault();
    console.log("hello ", value);
  }

  return (
    <div>
        <form onSubmit={onSubmit}>
          <input 
            value={value} 
            onChange={onChange} 
            type="text" 
            placeholder="username"
          />
          <button>Log in</button>
        </form>
    </div>
  );
}

export default App;
