import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [date, b] = useState(['2월 17일 발행','2월 17일 발행','2월 17일 발행']);
  let [글제목, 글제목변경] = useState(['남자 코트추천','강남 우동맛집', '파이썬독학']); //destructuring 변수생성 문법
  let [따봉,따봉변경] = useState(0); //오른쪽은 state변경함수
  //자동렌더링
  //document.queryselecor('h4').innerHtml = post;
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4> 
      </div>
      <button onClick = {()=> {
        let copy =[...글제목]; //화살표(참조) 바꾸기
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>
      <div className='list'>
        <h4>{ 글제목[0]}<span onClick={() => {따봉변경(따봉+1)} }>👍</span> {따봉} </h4> 
        <p>{date[0]}</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>{date[1]}</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>{date[2]}</p>
      </div>
    </div>
  );
}

export default App;
